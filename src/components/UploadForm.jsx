import { useState } from "react";
import { uploadFile } from "../api";

function UploadForm({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    try {
      const result = await uploadFile(file);
      onUploadSuccess(result.data.cleanedJson);
      setFile(null);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit" disabled={!file || loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
}

export default UploadForm;
