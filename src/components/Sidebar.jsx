import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        background: "#333",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <h2>📂 Doc Portal</h2>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/batches" style={{ color: "white", textDecoration: "none" }}>
        Batches
      </Link>
    </div>
  );
};

export default Sidebar;
