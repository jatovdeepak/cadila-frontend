import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import BatchesPage from "./pages/BatchesPage";

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/batches" element={<BatchesPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
