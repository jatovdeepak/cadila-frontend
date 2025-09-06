// import React, { useEffect, useState } from "react";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import workerSrc from "pdfjs-dist/build/pdf.worker.min.js";
// import DataDisplay from "../components/DataDisplay";

// const API_URL = "http://localhost:5000";

// const BatchesPage = () => {
//   const [docs, setDocs] = useState([]);
//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docDetails, setDocDetails] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);

//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   useEffect(() => {
//     const fetchDocs = async () => {
//       try {
//         const res = await fetch(`${API_URL}/documents`);
//         const data = await res.json();
//         setDocs(data);
//       } catch (err) {
//         console.error("Error fetching documents:", err);
//       }
//     };
//     fetchDocs();
//   }, []);

//   const handleView = async (doc) => {
//     setSelectedDoc(doc);

//     try {
//       const res = await fetch(`${API_URL}/documents/${doc.id}`);
//       const data = await res.json();

//       // ✅ convert base64 string to Blob URL for rendering
//       if (data.pdfBase64) {
//         const byteCharacters = atob(data.pdfBase64);
//         const byteNumbers = new Array(byteCharacters.length);
//         for (let i = 0; i < byteCharacters.length; i++) {
//           byteNumbers[i] = byteCharacters.charCodeAt(i);
//         }
//         const byteArray = new Uint8Array(byteNumbers);
//         const blob = new Blob([byteArray], { type: "application/pdf" });
//         const url = URL.createObjectURL(blob);
//         setPdfUrl(url);
//       }

//       setDocDetails(data);
//     } catch (err) {
//       console.error("Error fetching document details:", err);
//     }
//   };

//   return (
//     <div style={{ display: "flex", height: "100%", padding: "20px" }}>
//       {/* Left: Table */}
//       <div style={{ flex: 1, marginRight: "20px" }}>
//         <h1>Batches</h1>
//         <table
//           border="1"
//           width="100%"
//           cellPadding="10"
//           style={{ borderCollapse: "collapse" }}
//         >
//           <thead>
//             <tr style={{ background: "#f4f4f4" }}>
//               <th>File Name</th>
//               <th>Uploaded At</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {docs.map((doc) => (
//               <tr key={doc.id}>
//                 <td>{doc.fileName}</td>
//                 <td>{new Date(doc.createdAt).toLocaleString()}</td>
//                 <td>
//                   <button onClick={() => handleView(doc)}>View</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Right: Viewer + JSON */}
//       <div style={{ flex: 2 }}>
//         {selectedDoc ? (
//           <div>
//             <h2>{selectedDoc.fileName}</h2>
//             <div style={{ marginBottom: "20px" }}>
//               <strong>Uploaded:</strong>{" "}
//               {new Date(selectedDoc.createdAt).toLocaleString()}
//             </div>

//             <div style={{ display: "flex", gap: "20px" }}>
//               {/* PDF Preview (base64 → Blob URL) */}
//               {pdfUrl && (
//                 <div
//                   style={{ flex: 2, height: "600px", border: "1px solid #ccc" }}
//                 >
//                   <Worker workerUrl={workerSrc}>
//                     <Viewer
//                       fileUrl={pdfUrl}
//                       plugins={[defaultLayoutPluginInstance]}
//                     />
//                   </Worker>
//                 </div>
//               )}

//               {/* JSON Data */}
//               <div
//                 style={{
//                   flex: 1,
//                   background: "#f9f9f9",
//                   padding: "10px",
//                   borderRadius: "5px",
//                   overflowY: "auto",
//                   maxHeight: "600px",
//                   fontSize: "14px",
//                 }}
//               >
//                 <h3>Extracted Data</h3>
//                 {docDetails ? (
//                   <pre>{JSON.stringify(docDetails.cleanedJson, null, 2)}</pre>
//                 ) : (
//                   <p>Loading extracted data...</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>Select a document to view</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BatchesPage;























// // src/pages/BatchesPage.js
// import React, { useEffect, useState } from "react";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import workerSrc from "pdfjs-dist/build/pdf.worker.min.js";
// import DataDisplay from "../components/DataDisplay";

// const API_URL = "http://localhost:5000";

// const BatchesPage = () => {
//   const [docs, setDocs] = useState([]);
//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docDetails, setDocDetails] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);

//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   useEffect(() => {
//     const fetchDocs = async () => {
//       try {
//         const res = await fetch(`${API_URL}/documents`);
//         const data = await res.json();
//         setDocs(data);
//       } catch (err) {
//         console.error("Error fetching documents:", err);
//       }
//     };
//     fetchDocs();
//   }, []);

//   const handleView = async (doc) => {
//     setSelectedDoc(doc);

//     try {
//       const res = await fetch(`${API_URL}/documents/${doc.id}`);
//       const data = await res.json();

//       // ✅ convert base64 string to Blob URL for rendering
//       if (data.pdfBase64) {
//         const byteCharacters = atob(data.pdfBase64);
//         const byteNumbers = new Array(byteCharacters.length);
//         for (let i = 0; i < byteCharacters.length; i++) {
//           byteNumbers[i] = byteCharacters.charCodeAt(i);
//         }
//         const byteArray = new Uint8Array(byteNumbers);
//         const blob = new Blob([byteArray], { type: "application/pdf" });
//         const url = URL.createObjectURL(blob);
//         setPdfUrl(url);
//       }

//       setDocDetails(data);
//     } catch (err) {
//       console.error("Error fetching document details:", err);
//     }
//   };

//   return (
//     <div style={{ display: "flex", height: "100%", padding: "20px" }}>
//       {/* Left: Table */}
//       <div style={{ flex: 1, marginRight: "20px" }}>
//         <h1>Batches</h1>
//         <table
//           border="1"
//           width="100%"
//           cellPadding="10"
//           style={{ borderCollapse: "collapse" }}
//         >
//           <thead>
//             <tr style={{ background: "#f4f4f4" }}>
//               <th>File Name</th>
//               <th>Uploaded At</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {docs.map((doc) => (
//               <tr key={doc.id}>
//                 <td>{doc.fileName}</td>
//                 <td>{new Date(doc.createdAt).toLocaleString()}</td>
//                 <td>
//                   <button onClick={() => handleView(doc)}>View</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Right: Viewer + JSON */}
//       <div style={{ flex: 2 }}>
//         {selectedDoc ? (
//           <div>
//             <h2>{selectedDoc.fileName}</h2>
//             <div style={{ marginBottom: "20px" }}>
//               <strong>Uploaded:</strong>{" "}
//               {new Date(selectedDoc.createdAt).toLocaleString()}
//             </div>

//             <div style={{ display: "flex", gap: "20px" }}>
//               {/* PDF Preview (base64 → Blob URL) */}
//               {pdfUrl && (
//                 <div
//                   style={{ flex: 2, height: "600px", border: "1px solid #ccc" }}
//                 >
//                   <Worker workerUrl={workerSrc}>
//                     <Viewer
//                       fileUrl={pdfUrl}
//                       plugins={[defaultLayoutPluginInstance]}
//                     />
//                   </Worker>
//                 </div>
//               )}

//               {/* JSON Data with DataDisplay */}
//               <div
//                 style={{
//                   flex: 1,
//                   background: "#f9f9f9",
//                   padding: "10px",
//                   borderRadius: "5px",
//                   overflowY: "auto",
//                   maxHeight: "600px",
//                   fontSize: "14px",
//                 }}
//               >
//                 <h3>Extracted Data</h3>
//                 {docDetails ? (
//                   <DataDisplay data={docDetails.cleanedJson} />
//                 ) : (
//                   <p>Loading extracted data...</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>Select a document to view</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BatchesPage;







// src/pages/BatchesPage.js
import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.js";
import DataDisplay from "../components/DataDisplay";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const API_URL = "http://localhost:5000";

const BatchesPage = () => {
  const [docs, setDocs] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [docDetails, setDocDetails] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [open, setOpen] = useState(false);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await fetch(`${API_URL}/documents`);
        const data = await res.json();
        setDocs(data);
      } catch (err) {
        console.error("Error fetching documents:", err);
      }
    };
    fetchDocs();
  }, []);

  const handleView = async (doc) => {
    setSelectedDoc(doc);
    setOpen(true);

    try {
      const res = await fetch(`${API_URL}/documents/${doc.id}`);
      const data = await res.json();

      // ✅ convert base64 string to Blob URL for rendering
      if (data.pdfBase64) {
        const byteCharacters = atob(data.pdfBase64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      }

      setDocDetails(data);
    } catch (err) {
      console.error("Error fetching document details:", err);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDoc(null);
    setDocDetails(null);
    setPdfUrl(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Batches</h1>
      <table
        border="1"
        width="100%"
        cellPadding="10"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th>File Name</th>
            <th>Uploaded At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.fileName}</td>
              <td>{new Date(doc.createdAt).toLocaleString()}</td>
              <td>
                <button onClick={() => handleView(doc)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 📌 Dialog for PDF + Data side by side */}
      <Dialog
  open={open}
  onClose={handleClose}
  maxWidth="xl"     // ⬅️ bigger than "lg"
  fullWidth
  fullScreen={false} // ⬅️ set to true if you want fullscreen
>
  <DialogTitle>
    {selectedDoc ? selectedDoc.fileName : "Document Viewer"}
  </DialogTitle>
  <DialogContent dividers>
    {selectedDoc && (
      <div style={{ display: "flex", gap: "20px" }}>
        {/* PDF Preview */}
        {pdfUrl && (
          <div
            style={{
              flex: 1,
              height: "85vh", // ⬅️ taller viewer
              border: "1px solid #ccc",
            }}
          >
            <Worker workerUrl={workerSrc}>
              <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        )}

        {/* JSON Data */}
        <div
          style={{
            flex: 1,
            background: "#f9f9f9",
            padding: "10px",
            borderRadius: "5px",
            overflowY: "auto",
            maxHeight: "85vh", // match PDF height
            fontSize: "14px",
          }}
        >
          <h3>Extracted Data</h3>
          {docDetails ? (
            <DataDisplay data={docDetails.cleanedJson} />
          ) : (
            <p>Loading extracted data...</p>
          )}
        </div>
      </div>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Close</Button>
  </DialogActions>
</Dialog>

    </div>
  );
};

export default BatchesPage;
