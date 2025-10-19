import React from "react";

const PQRReviewContForm5 = ({ data }) => {
  // --- Safely extract merged JSON ---
  const merged = data?.mergedJson || {};

  // --- Map incoming data with defaults ---
  const info = {
    company: merged["COMPANY NAME"] || "",
    annexure: merged["ANNEXURE"] || "",
    page: merged["PAGE"] || "Page: 7 of 7",
    formNo: merged["FORM NO"] || "",

    productName: merged["PRODUCT NAME"] || "",
    productCode: merged["PRODUCT CODE"] || "",
    market: merged["MARKET"] || "",
    reviewPeriod:
      merged["REVIEW PERIOD"] || "",

    attachmentsCont:
      merged["ATTACHMENTS CONT"] || [
        { no: "", name: "" },
        { no: "", name: "" },
        {
          no: "",
          name:
            '',
        },
      ],

    attachmentList:
      merged["ATTACHMENT LIST"] || [
        {
          no: "",
          name:
            "",
        },
        { no: "", name: "" },
        { no: "", name: "" },
        { no: "", name: "" },
        { no: "", name: "" },
        { no: "", name: "" },
        {
          no: "",
          name:
            "",
        },
        { no: "", name: "" },
        { no: "", name: "" },
        { no: "", name: "" },
        { no: "", name: "" },
        { no: "", name: "" },
        { no: "", name: "" },
        { no: "", name: "" },
      ],

    conclusion: merged["CONCLUSION"] || "",
  };

  // --- STYLES ---
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #000",
    },
    headerBlock: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "2px solid #000",
      paddingBottom: "3px",
      marginBottom: "5px",
      fontSize: "10px",
    },
    headerText: {
      lineHeight: "1.2",
      fontWeight: "bold",
      margin: "0",
    },
    headerRightText: {
      textAlign: "right",
      margin: "0",
    },
    formNoBottom: {
      fontSize: "10px",
      marginBottom: "10px",
      textAlign: "right",
    },
    pqrTitle: {
      textAlign: "center",
      fontSize: "16px",
      margin: "10px 0",
      padding: "5px",
      fontWeight: "bold",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "10px",
      zIndex: 2,
      position: "relative",
    },
    td: {
      border: "1px solid #000",
      padding: "4px",
      fontSize: "12px",
      verticalAlign: "top",
    },
    tdLabel: {
      width: "40%",
      fontWeight: "bold",
    },
    tdDelimiter: {
      width: "10px",
      textAlign: "center",
      fontWeight: "bold",
    },
    tdData: {
      width: "55%",
    },
    sectionHeading: {
      fontSize: "14px",
      fontWeight: "bold",
      padding: "2px 0",
      marginBottom: "3px",
    },
    attachmentTable: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "10px",
      fontSize: "12px",
    },
    attachmentTh: {
      border: "1px solid #000",
      padding: "4px",
      backgroundColor: "#f0f0f0",
      fontWeight: "bold",
      textAlign: "center",
    },
    attachmentTd: {
      border: "1px solid #000",
      padding: "4px",
    },
    conclusionSection: {
      textAlign: "center",
      padding: "10px",
      border: "1px solid #000",
      fontWeight: "bold",
    },
  };

  // --- Helper to render a table row ---
  const renderTableRow = (label, value, isHeader = false) => (
    <tr style={isHeader ? { backgroundColor: "#e0e0e0" } : {}}>
      <td
        style={{
          ...styles.td,
          ...styles.tdLabel,
          ...(isHeader ? { backgroundColor: "#e0e0e0" } : {}),
        }}
      >
        {label}
      </td>
      <td
        style={{
          ...styles.td,
          ...styles.tdDelimiter,
          ...(isHeader ? { backgroundColor: "#e0e0e0" } : {}),
        }}
      >
        :
      </td>
      <td style={{ ...styles.td, ...styles.tdData }}>{value}</td>
    </tr>
  );

  // --- RENDER ---
  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.headerBlock}>
        <div>
          <p style={styles.headerText}>
            **CADILA**
            <br />
            **PHARMACEUTICALS**
            <br />
            **LIMITED**
          </p>
        </div>
        <div>
          <p style={styles.headerRightText}>{info.annexure}</p>
          <p style={styles.headerRightText}>{info.page}</p>
        </div>
      </div>
      <p style={styles.formNoBottom}>{info.formNo}</p>

      {/* TITLE */}
      <h2 style={{ ...styles.pqrTitle, borderBottom: "1px solid #000" }}>
        PRODUCT QUALITY REVIEW (PQR)
      </h2>

      {/* PRODUCT INFO */}
      <table style={styles.table}>
        <thead>{renderTableRow("PRODUCT INFORMATION", "", true)}</thead>
        <tbody>
          {renderTableRow("Product name", info.productName)}
          {renderTableRow("Product code", info.productCode)}
          {renderTableRow("Market", info.market)}
          {renderTableRow("Review period", info.reviewPeriod)}
        </tbody>
      </table>

      {/* LIST OF ATTACHMENTS (Cont.) */}
      <h3 style={styles.sectionHeading}>List of Attachments (Continued):</h3>
      <table style={styles.attachmentTable}>
        <thead>
          <tr>
            <th style={styles.attachmentTh}>Attachment No.</th>
            <th style={styles.attachmentTh}>Name of Document</th>
          </tr>
        </thead>
        <tbody>
          {info.attachmentsCont.map((item, index) => (
            <tr key={`cont-${index}`}>
              <td
                style={{
                  ...styles.attachmentTd,
                  textAlign: "center",
                  width: "20%",
                }}
              >
                {item.no}
              </td>
              <td style={styles.attachmentTd}>{item.name}</td>
            </tr>
          ))}
          {info.attachmentList.map((item, index) => (
            <tr key={`main-${index}`}>
              <td
                style={{
                  ...styles.attachmentTd,
                  textAlign: "center",
                  width: "20%",
                }}
              >
                {item.no}
              </td>
              <td style={styles.attachmentTd}>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CONCLUSION */}
      <h3 style={styles.sectionHeading}>Conclusion:</h3>
      <div style={styles.conclusionSection}>
        <p>{info.conclusion}</p>
      </div>
    </div>
  );
};

export default PQRReviewContForm5;
