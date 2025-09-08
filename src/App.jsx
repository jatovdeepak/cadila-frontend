import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import BatchesPage from "./pages/BatchesPage";
import { Box, Toolbar } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <Toolbar />  */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/batches" element={<BatchesPage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
