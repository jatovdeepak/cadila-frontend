import React from "react";

const ProductQualityReviewForm = ({ data = {} }) => {
  console.log("data from product quality review form", data);

  // Safely extract nested mergedJson
  const merged = data?.mergedJson || {};

  // Safely map fields with optional chaining
  const safe = {
    productName: merged["PRODUCT NAME"] || "",
    strength: merged["STRENGTH"] || "",
    productCode: merged["PRODUCT CODE"] || "",
    mfgLocation: merged["MFG LOCATION"] || "",
    market: merged["MARKET"] || "",
    pqrNumber: merged["PQR NUMBER"] || "",
    reviewPeriod: merged["REVIEW PERIOD"] || "",
    preparedBy: {
      designation: merged["PREPARED BY DESIGNATION"] || "",
      name: merged["PREPARED BY NAME"] || "",
      signature: merged["PREPARED BY SIGNATURE"] || "",
      date: merged["PREPARED BY DATE"] || "",
    },
    reviewedBy: {
      designation: merged["REVIEWED BY DESIGNATION"] || "",
      name: merged["REVIEWED BY NAME"] || "",
      signature: merged["REVIEWED BY SIGNATURE"] || "",
      date: merged["REVIEWED BY DATE"] || "",
    },
    approvedBy: {
      designation: merged["APPROVED BY DESIGNATION"] || "",
      name: merged["APPROVED BY NAME"] || "",
      signature: merged["APPROVED BY SIGNATURE"] || "",
      date: merged["APPROVED BY DATE"] || "",
    },
    header: {
      company: merged["COMPANY NAME"] || "",
      documentname: merged["DOCUMENT NAME"] || "",
      annexure: merged["ANNEXURE"] || "ANNEXURE - 1 (Ref. SOP No. DQA 011)",
      page: merged["PAGE"] || "Page: 1 of 7",
      formNo: merged["FORM NO"] || "",
    },
  };

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
      paddingBottom: "5px",
      marginBottom: "10px",
    },
    headerText: {
      lineHeight: "1.2",
      fontSize: "10px",
      fontWeight: "bold",
      margin: "0",
    },
    headerRightText: {
      textAlign: "right",
      fontSize: "10px",
      margin: "0",
    },
    formNoBottom: {
      fontSize: "10px",
      marginBottom: "20px",
    },
    pqrTitle: {
      textAlign: "center",
      fontSize: "16px",
      margin: "20px 0",
      border: "1px solid #000",
      padding: "5px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "20px",
    },
    td: {
      border: "1px solid #000",
      padding: "8px",
      fontSize: "12px",
    },
    label: {
      width: "30%",
      backgroundColor: "#f0f0f0",
      fontWeight: "bold",
    },
    reviewPeriodLabel: {
      marginTop: "20px",
      marginBottom: "20px",
      fontSize: "12px",
      fontWeight: "bold",
    },
    th: {
      border: "1px solid #000",
      padding: "8px 4px",
      fontSize: "11px",
      textAlign: "center",
      backgroundColor: "#e0e0e0",
    },
    tdApproval: {
      border: "1px solid #000",
      padding: "8px 4px",
      fontSize: "11px",
      textAlign: "left",
    },
    labelCol: {
      width: "15%",
      fontWeight: "bold",
    },
    detailCol: {
      width: "20%",
    },
    signature: {
      textAlign: "center",
      fontStyle: "italic",
    },
  };

  return (
    <div style={styles.container}>
      {/* --- HEADER --- */}
      <div style={styles.headerBlock}>
        <div>
          <p style={styles.headerText}>
            {safe.header.company}
          </p>
        </div>
        <div>
          <p style={styles.headerRightText}>{safe.header.annexure}</p>
          <p style={styles.headerRightText}>{safe.header.page}</p>
        </div>
      </div>
      <p style={styles.formNoBottom}>{safe.header.formNo}</p>

      {/* --- TITLE --- */}
      <h2 style={styles.pqrTitle}>{safe.header.documentname}</h2>

      {/* --- PRODUCT DETAILS TABLE --- */}
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>PRODUCT NAME</td>
            <td style={styles.td}>{safe.productName}</td>
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>STRENGTH</td>
            <td style={styles.td}>{safe.strength}</td>
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>PRODUCT CODE</td>
            <td style={styles.td}>{safe.productCode}</td>
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>MFG LOCATION</td>
            <td style={styles.td}>{safe.mfgLocation}</td>
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>MARKET</td>
            <td style={styles.td}>{safe.market}</td>
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>PQR NUMBER</td>
            <td style={styles.td}>{safe.pqrNumber}</td>
          </tr>
        </tbody>
      </table>

      {/* --- REVIEW PERIOD --- */}
      <p style={styles.reviewPeriodLabel}>REVIEW PERIOD: {safe.reviewPeriod}</p>

      {/* --- APPROVAL TABLE --- */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.th, ...styles.labelCol }}></th>
            <th style={styles.th}>DESIGNATION</th>
            <th style={styles.th}>NAME</th>
            <th style={styles.th}>SIGNATURE</th>
            <th style={styles.th}>DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...styles.tdApproval, ...styles.labelCol }}>
              PREPARED BY
            </td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {safe.preparedBy.designation}
            </td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {safe.preparedBy.name}
            </td>
            <td
              style={{
                ...styles.tdApproval,
                ...styles.detailCol,
                ...styles.signature,
              }}
            >
              {safe.preparedBy.signature}
            </td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {safe.preparedBy.date}
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.tdApproval, ...styles.labelCol }}>
              REVIEWED BY
            </td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {safe.reviewedBy.designation}
            </td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {safe.reviewedBy.name}
            </td>
            <td
              style={{
                ...styles.tdApproval,
                ...styles.detailCol,
                ...styles.signature,
              }}
            >
              {safe.reviewedBy.signature}
            </td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {safe.reviewedBy.date}
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.tdApproval, ...styles.labelCol }}>
              APPROVED BY
            </td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {safe.approvedBy.designation}
            </td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {safe.approvedBy.name}
            </td>
            <td
              style={{
                ...styles.tdApproval,
                ...styles.detailCol,
                ...styles.signature,
              }}
            >
              {safe.approvedBy.signature}
            </td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {safe.approvedBy.date}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductQualityReviewForm;
