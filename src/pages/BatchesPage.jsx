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
} from "@mui/material";

const API_URL = "http://localhost:5000";

const BatchesPage = () => {
  const [docs, setDocs] = useState([]);
  const [detailsCache, setDetailsCache] = useState({});
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [docDetails, setDocDetails] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // table state
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("fileName");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // fetch docs + preload details
  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await fetch(`${API_URL}/documents`);
        const data = await res.json();
        setDocs(data);

        // preload details for each
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
    fetchDocs();
  }, []);

  // sorting
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
    return order === "asc" ? valA > valB ? 1 : -1 : valA < valB ? 1 : -1;
  });

  // filter by search
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

  // pagination
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // view dialog
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

  return (
    <div>
      <h1>Batches</h1>

      {/* Search Bar */}
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "16px" }}
      />

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f4f4f4" }}>
            <TableRow>
              <TableCell sortDirection={orderBy === "fileName" ? order : false}>
                <TableSortLabel
                  active={orderBy === "fileName"}
                  direction={orderBy === "fileName" ? order : "asc"}
                  onClick={() => handleRequestSort("fileName")}
                >
                  File Name
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === "createdAt" ? order : false}>
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
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredDocs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((doc) => {
                const details = detailsCache[doc.id];
                const cleaned = details?.cleanedJson?.[0] || {};
                return (
                  <TableRow key={doc.id}>
                    <TableCell>{doc.fileName}</TableCell>
                    <TableCell>
                      {new Date(doc.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {details ? cleaned["PRODUCT NAME"] || "N/A" : <em>Loading...</em>}
                    </TableCell>
                    <TableCell>
                      {details ? cleaned["DOCUMENT"] || "N/A" : <em>Loading...</em>}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleView(doc)}
                      >
                        View
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
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth>
        <DialogTitle>{selectedDoc?.fileName || "Document Viewer"}</DialogTitle>
        <DialogContent dividers>
          {loading ? (
            <CircularProgress />
          ) : (
            selectedDoc && (
              <div style={{ display: "flex", gap: "20px" }}>
                {pdfUrl && (
                  <div
                    style={{
                      flex: 1,
                      height: "85vh",
                      border: "1px solid #ccc",
                    }}
                  >
                    <Worker>
                      <Viewer
                        fileUrl={pdfUrl}
                        plugins={[defaultLayoutPluginInstance]}
                      />
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
                  {docDetails ? (
                    <DataDisplay data={docDetails.cleanedJson} />
                  ) : (
                    <p>Loading extracted data...</p>
                  )}
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
