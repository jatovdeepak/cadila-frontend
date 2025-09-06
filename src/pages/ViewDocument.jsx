import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:5000";

const ViewDocument = ({ doc }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDoc = async () => {
      const res = await fetch(`${API_URL}/documents/${doc.id}`);
      const data = await res.json();
      setDetails(data);
    };
    fetchDoc();
  }, [doc]);

  if (!details) return <p>Loading...</p>;

  return (
    <div style={{ display: "flex", gap: "20px", height: "100%" }}>
      <div style={{ flex: 1 }}>
        <iframe
          src={details.pdfUrl}
          title="PDF Viewer"
          width="100%"
          height="600px"
          style={{ border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <h3>Extracted Data:</h3>
        <pre
          style={{
            background: "#f4f4f4",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {JSON.stringify(details.cleanedJson, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ViewDocument;
