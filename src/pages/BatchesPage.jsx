import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import DataDisplay from "../components/DataDisplay";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Paper,
  CircularProgress,
  TextField,
  Checkbox,
  Toolbar,
  Typography,
} from "@mui/material";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const BatchesPage = () => {
  const [docs, setDocs] = useState([]);
  const [detailsCache, setDetailsCache] = useState({});
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [docDetails, setDocDetails] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // selection state
  const [selectedRows, setSelectedRows] = useState([]);

  // table state
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("fileName");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // PQR List
  const [pqrList, setPqrList] = useState(() => {
    const stored = localStorage.getItem("pqrList");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("pqrList", JSON.stringify(pqrList));
  }, [pqrList]);

  // 🟦 Fetch Documents
  const fetchDocs = async () => {
    try {
      const res = await fetch(`${API_URL}/documents`);
      const data = await res.json();
      setDocs(data);

      // preload details
      const detailsPromises = data.map(async (doc) => {
        try {
          const res = await fetch(`${API_URL}/documents/${doc.id}`);
          const details = await res.json();
          return { id: doc.id, details };
        } catch (err) {
          console.error(`Error fetching details for ${doc.id}:`, err);
          return null;
        }
      });

      const detailsArr = await Promise.all(detailsPromises);
      const detailsMap = {};
      detailsArr.forEach((entry) => {
        if (entry) detailsMap[entry.id] = entry.details;
      });
      setDetailsCache(detailsMap);
    } catch (err) {
      console.error("Error fetching documents:", err);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  // 🟧 Sorting
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedDocs = [...docs].sort((a, b) => {
    let valA, valB;
    if (orderBy === "fileName") {
      valA = a.fileName.toLowerCase();
      valB = b.fileName.toLowerCase();
    } else if (orderBy === "createdAt") {
      valA = new Date(a.createdAt);
      valB = new Date(b.createdAt);
    }
    return order === "asc" ? (valA > valB ? 1 : -1) : valA < valB ? 1 : -1;
  });

  // 🟨 Search
  const filteredDocs = sortedDocs.filter((doc) => {
    const details = detailsCache[doc.id];
    const cleaned = details?.cleanedJson?.[0] || {};
    const productName = cleaned["PRODUCT NAME"] || "";
    const document = cleaned["DOCUMENT"] || "";
    return (
      doc.fileName.toLowerCase().includes(search.toLowerCase()) ||
      productName.toLowerCase().includes(search.toLowerCase()) ||
      document.toLowerCase().includes(search.toLowerCase())
    );
  });

  // 🟥 Selection
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const allIds = filteredDocs.map((doc) => doc.id);
      setSelectedRows(allIds);
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const isSelected = (id) => selectedRows.includes(id);

  // 🟩 Generate PQR
  const handleGeneratePQR = async () => {
    if (selectedRows.length === 0) return;
    try {
      const res = await fetch(`${API_URL}/pqrs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedDocIds: selectedRows }),
      });
      const data = await res.json();

      if (res.ok) {
        alert(`${data.pqr.name} created successfully!`);
        setSelectedRows([]);
        setPqrList((prev) => [...prev, data.pqr.name]);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Error creating PQR");
    }
  };

  // 🟦 View Document
  const handleView = async (doc) => {
    setSelectedDoc(doc);
    setOpen(true);
    setLoading(true);

    const data = detailsCache[doc.id];
    if (data?.pdfBase64) {
      const byteCharacters = atob(data.pdfBase64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "application/pdf" });
      setPdfUrl(URL.createObjectURL(blob));
    }
    setDocDetails(data);
    setLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDoc(null);
    setDocDetails(null);
    setPdfUrl(null);
  };

  // 🗑️ Delete Document
  const handleDelete = async (docId) => {
    if (!window.confirm("Are you sure you want to delete this document?")) return;

    try {
      const res = await fetch(`${API_URL}/documents/${docId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Document deleted successfully");
        setDocs((prev) => prev.filter((d) => d.id !== docId));
        const updatedCache = { ...detailsCache };
        delete updatedCache[docId];
        setDetailsCache(updatedCache);
      } else {
        const err = await res.json();
        alert(`Failed to delete: ${err.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting document");
    }
  };

  return (
    <div>
      <h1>Batches</h1>

      {/* Toolbar */}
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px" }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ flex: 1, marginRight: "16px" }}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={selectedRows.length === 0}
          onClick={handleGeneratePQR}
        >
          Generate PQR
        </Button>
      </Toolbar>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f4f4f4" }}>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={selectedRows.length > 0 && selectedRows.length < filteredDocs.length}
                  checked={filteredDocs.length > 0 && selectedRows.length === filteredDocs.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "fileName"}
                  direction={orderBy === "fileName" ? order : "asc"}
                  onClick={() => handleRequestSort("fileName")}
                >
                  File Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "createdAt"}
                  direction={orderBy === "createdAt" ? order : "asc"}
                  onClick={() => handleRequestSort("createdAt")}
                >
                  Uploaded At
                </TableSortLabel>
              </TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Document</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredDocs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((doc) => {
                const details = detailsCache[doc.id];
                const cleaned = details?.cleanedJson?.[0] || {};
                const checked = isSelected(doc.id);

                return (
                  <TableRow key={doc.id} hover selected={checked}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={checked}
                        onChange={() => handleSelectRow(doc.id)}
                      />
                    </TableCell>
                    <TableCell>{doc.fileName}</TableCell>
                    <TableCell>{new Date(doc.createdAt).toLocaleString()}</TableCell>
                    <TableCell>{details ? cleaned["PRODUCT NAME"] || "N/A" : <em>Loading...</em>}</TableCell>
                    <TableCell>{details ? cleaned["DOCUMENT NAME"] || "N/A" : <em>Loading...</em>}</TableCell>
                    <TableCell>
                      <Button variant="contained" size="small" onClick={() => handleView(doc)} sx={{ mr: 1 }}>
                        View
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(doc.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredDocs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />
      </TableContainer>

      {/* Viewer Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth>
        <DialogTitle>{selectedDoc?.fileName || "Document Viewer"}</DialogTitle>
        <DialogContent dividers>
          {loading ? (
            <CircularProgress />
          ) : (
            selectedDoc && (
              <div style={{ display: "flex", gap: "20px" }}>
                {pdfUrl && (
                  <div style={{ flex: 1, height: "85vh", border: "1px solid #ccc" }}>
                    <Worker workerUrl={`//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
                      <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
                    </Worker>
                  </div>
                )}
                <div
                  style={{
                    flex: 1,
                    background: "#f9f9f9",
                    padding: "10px",
                    borderRadius: "5px",
                    overflowY: "auto",
                    maxHeight: "85vh",
                    fontSize: "14px",
                  }}
                >
                  <h3>Extracted Data</h3>
                  {docDetails ? <DataDisplay data={docDetails.cleanedJson} /> : <p>Loading extracted data...</p>}
                </div>
              </div>
            )
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
