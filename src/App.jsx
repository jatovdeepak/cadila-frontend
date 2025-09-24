import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import BatchesPage from "./pages/BatchesPage";
import { Box } from "@mui/material";
import Table1 from "./pages/Table1";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/batches" element={<BatchesPage />} />
          <Route path="/tables" element={<Table1 />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
