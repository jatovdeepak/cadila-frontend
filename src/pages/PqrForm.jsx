// src/components/PqrForm.jsx
import React from "react";

const PqrForm = () => {
  const formData = {
    productName: "CLINDAMYCIN CAPSULES 150 MG",
    strength: "150 MG / CAPSULE",
    productCode: "EC060",
    mfgLocation: "CPL, DHOLKA",
    market: "EXPORT (SOMEX PHARMA-UK)",
    pqrNumber: "PQR/MPB/CLINDAMYCIN CAPSULES 150 MG/ICH/097/25",
    reviewPeriod: "1st JANUARY 2024 to 28th FEBRUARY 2025",
    preparedBy: {
      designation: "Technical Supervisor QA",
      name: "Vpclhr Vl~eJa v R",
      signature: "✔",
      date: "31/05/25",
    },
    reviewedBy: {
      designation: "Technical Supervisor QA",
      name: "M e-11'Vl~i M",
      signature: "✔",
      date: "01/06/25",
    },
    approvedBy: {
      designation: "Sr. Manager QA",
      name: "Y\\~c .... P...-cdL~'h e",
      signature: "✔",
      date: "02/06/25",
    },
  };

  return (
    <div style={{ maxWidth: "900px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        PRODUCT QUALITY REVIEW (PQR) - REPORT
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <tbody>
          <tr>
            <td style={cellStyle}>PRODUCT NAME</td>
            <td style={cellStyle}>{formData.productName}</td>
          </tr>
          <tr>
            <td style={cellStyle}>STRENGTH</td>
            <td style={cellStyle}>{formData.strength}</td>
          </tr>
          <tr>
            <td style={cellStyle}>PRODUCT CODE</td>
            <td style={cellStyle}>{formData.productCode}</td>
          </tr>
          <tr>
            <td style={cellStyle}>MFG LOCATION</td>
            <td style={cellStyle}>{formData.mfgLocation}</td>
          </tr>
          <tr>
            <td style={cellStyle}>MARKET</td>
            <td style={cellStyle}>{formData.market}</td>
          </tr>
          <tr>
            <td style={cellStyle}>PQR NUMBER</td>
            <td style={cellStyle}>{formData.pqrNumber}</td>
          </tr>
          <tr>
            <td style={cellStyle}>REVIEW PERIOD</td>
            <td style={cellStyle}>{formData.reviewPeriod}</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ marginBottom: "10px" }}>Signatories</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={headerStyle}>DESIGNATION</th>
            <th style={headerStyle}>NAME</th>
            <th style={headerStyle}>SIGNATURE</th>
            <th style={headerStyle}>DATE</th>
          </tr>
        </thead>
        <tbody>
          {[formData.preparedBy, formData.reviewedBy, formData.approvedBy].map(
            (person, idx) => (
              <tr key={idx}>
                <td style={cellStyle}>{person.designation}</td>
                <td style={cellStyle}>{person.name}</td>
                <td style={cellStyle}>{person.signature}</td>
                <td style={cellStyle}>{person.date}</td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <p style={{ textAlign: "right", marginTop: "20px", fontStyle: "italic" }}>
        FORM NO. FDQAO11-01-13 | UNCONTROLLED COPY
      </p>
    </div>
  );
};

const cellStyle = {
  border: "1px solid #444",
  padding: "8px",
  fontSize: "14px",
};

const headerStyle = {
  ...cellStyle,
  background: "#f0f0f0",
  fontWeight: "bold",
  textAlign: "center",
};

export default PqrForm;
