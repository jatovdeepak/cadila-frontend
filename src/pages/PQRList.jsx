import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import PQR from "./PQR";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const PQRList = () => {
  const [pqrList, setPqrList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [pqrData, setPqrData] = useState(null);

  // Fetch PQR list
  const fetchPQRs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/pqrs`);
      const data = await res.json();
      setPqrList(data); // [{_id, name, createdAt}]
    } catch (err) {
      console.error("Error fetching PQRs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPQRs();
  }, []);

  const handleView = async (pqrId) => {
    setOpen(true);
    setPqrData(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/pqrs/${pqrId}`);
      // if (!res.ok) throw new Error("PQR not found");
      const data = await res.json();
      setPqrData(data);
    } catch (err) {
      console.error("Error fetching PQR data:", err);
      setPqrData({ error: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (pqrId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this PQR?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_URL}/pqrs/${pqrId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Failed to delete PQR");
      }
      // Remove deleted PQR from list without refetching
      setPqrList((prev) => prev.filter((pqr) => pqr._id !== pqrId));
    } catch (err) {
      console.error("Error deleting PQR:", err);
      alert("Failed to delete PQR. Check console for details.");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setPqrData(null);
  };

  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h5">Generated PQR List</Typography>

      <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>PQR Name</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <CircularProgress size={24} />
                </TableCell>
              </TableRow>
            ) : pqrList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No PQR generated yet.
                </TableCell>
              </TableRow>
            ) : (
              pqrList.map((pqr, index) => (
                <TableRow key={pqr._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{pqr.name}</TableCell>
                  <TableCell>
                    {new Date(pqr.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ mr: 1 }}
                      onClick={() => handleView(pqr._id)}
                    >
                      View
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(pqr._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog showing JSON */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>PQR Data</DialogTitle>
        <DialogContent dividers>
          <PQR />
          {loading ? (
            <CircularProgress />
          ) : pqrData ? (
            <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
              {JSON.stringify(pqrData, null, 2)}
            </pre>
          ) : (
            <Typography>No data available</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PQRList;
