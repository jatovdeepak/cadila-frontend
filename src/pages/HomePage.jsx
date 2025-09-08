import React, { useState, useRef } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.js";
import DataDisplay from "../components/DataDisplay";

const API_URL = "http://localhost:5000";

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [pdfBase64, setPdfBase64] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [leftWidth, setLeftWidth] = useState(50); // initial left panel width (%)
  const containerRef = useRef();

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a PDF");

    setLoading(true);
    setResult(null);
    setPdfBase64(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${API_URL}/upload`, { method: "POST", body: formData });
      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setResult(data.data);

      const pdfRes = await fetch(`${API_URL}/documents/${data.data.id}/pdf`);
      const pdfData = await pdfRes.json();

      if (pdfData.base64) {
        const byteCharacters = atob(pdfData.base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setPdfBase64(url);
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading PDF");
    } finally {
      setLoading(false);
    }
  };

  // Drag resizing logic
  const isDragging = useRef(false);

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
      style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto", userSelect: isDragging.current ? "none" : "auto" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h1 style={{ marginBottom: "20px" }}>Home</h1>

      {/* Upload Form */}
      <form
        onSubmit={handleUpload}
        style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}
      >
        <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />
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

      {/* Loader */}
      {loading && (
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: "16px" }}>
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
            ></div>
            Processing PDF...
          </div>
        </div>
      )}

      {/* Resizable Panels */}
      {!loading && (result || pdfBase64) && (
        <div
          ref={containerRef}
          style={{ display: "flex", gap: "0px", marginTop: "20px", height: "600px", border: "1px solid #ccc", borderRadius: "5px", overflow: "hidden" }}
        >
          {/* Left Panel */}
          <div style={{ flexBasis: `${leftWidth}%`, overflowY: "auto", background: "#f9f9f9", padding: "10px" }}>
            {result ? (
              <>
                <h3>📄 Uploaded File:</h3>
                <p><strong>Name:</strong> {result.fileName}</p>
                <h3>✅ Extracted Data:</h3>
                <DataDisplay data={result.cleanedJson} />
              </>
            ) : (
              <p>No data available</p>
            )}
          </div>

          {/* Divider */}
          <div
            style={{ width: "5px", cursor: "col-resize", background: "#ddd" }}
            onMouseDown={handleMouseDown}
          ></div>

          {/* Right Panel */}
          <div style={{ flex: 1, overflow: "hidden", background: "#fff" }}>
            {pdfBase64 ? (
              <Worker workerUrl={workerSrc}>
                <Viewer fileUrl={pdfBase64} plugins={[defaultLayoutPluginInstance]} />
              </Worker>
            ) : (
              <p style={{ padding: "10px" }}>No PDF to display</p>
            )}
          </div>
        </div>
      )}

      {/* Loader animation CSS */}
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
