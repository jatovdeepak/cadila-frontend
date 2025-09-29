import React, { useState, useRef } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import DataDisplay from "../components/DataDisplay";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [leftWidth, setLeftWidth] = useState(50);
  const containerRef = useRef();
  const isDragging = useRef(false);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a PDF");

    setLoading(true);
    setResult(null);
    setPdfUrl(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Upload failed");
      }

      const data = await res.json();
      setResult(data.data);

      // If backend returned pdfBase64 inline, create blob URL
      const base64 = data.data.pdfBase64 || (data.data.base64 ?? null);
      if (base64) {
        // Convert to Uint8Array efficiently
        const binary = atob(base64);
        const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
        const blob = new Blob([bytes], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading PDF: " + (err.message || ""));
    } finally {
      setLoading(false);
    }
  };

  // Drag resizing logic
  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const newLeftWidth = (e.clientX / containerWidth) * 100;
    if (newLeftWidth > 10 && newLeftWidth < 90) {
      setLeftWidth(newLeftWidth);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1400px",
        margin: "0 auto",
        userSelect: isDragging.current ? "none" : "auto",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h1 style={{ marginBottom: "20px" }}>Home</h1>

      <form
        onSubmit={handleUpload}
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {loading && (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "16px" }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                border: "5px solid #f3f3f3",
                borderTop: "5px solid #007bff",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                marginRight: "10px",
              }}
            />
            Processing PDF...
          </div>
        </div>
      )}

      {!loading && (result || pdfUrl) && (
        <div
          ref={containerRef}
          style={{
            display: "flex",
            gap: "0px",
            marginTop: "20px",
            height: "600px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          {/* PDF on the left */}
          <div
            style={{
              flexBasis: `${leftWidth}%`,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            {pdfUrl ? (
              <Worker
                workerUrl={`//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}
              >
                <Viewer
                  fileUrl={pdfUrl}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            ) : (
              <p style={{ padding: "10px" }}>No PDF to display</p>
            )}
          </div>

          {/* Drag handle */}
          <div
            style={{ width: "5px", cursor: "col-resize", background: "#ddd" }}
            onMouseDown={handleMouseDown}
          />

          {/* Extracted data on the right */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              background: "#f9f9f9",
              padding: "10px",
            }}
          >
            {result ? (
              <>
                <h3>📄 Uploaded File:</h3>
                <p>
                  <strong>Name:</strong> {result.fileName}
                </p>
                <h3>✅ Extracted Data:</h3>
                <DataDisplay data={result.cleanedJson} />
              </>
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
