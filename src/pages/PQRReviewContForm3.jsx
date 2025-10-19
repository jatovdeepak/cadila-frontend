import React from "react";

const PQRReviewContForm3 = ({ data }) => {
  // --- Extract merged JSON safely ---
  const merged = data?.mergedJson || {};

  // --- Map incoming fields with fallbacks ---
  const info = {
    company: merged["COMPANY NAME"] || "",
    annexure: merged["ANNEXURE"] || "",
    page: merged["PAGE"] || "Page: 5 of 7",
    formNo: merged["FORM NO"] || "",

    productName: merged["PRODUCT NAME"] || "",
    productCode: merged["PRODUCT CODE"] || "",
    market: merged["MARKET"] || "",
    reviewPeriod:
      merged["REVIEW PERIOD"] || "",

    stabilityBatches:
      merged["STABILITY BATCHES"] ||
      "",
    stabilityResultsSummary:
      merged["STABILITY RESULTS SUMMARY"] || "",

    complaintsReceived: merged["COMPLAINTS RECEIVED"] || "",
    capaStatus: merged["CAPA STATUS"] || "",
    batchesRecalled:
      merged["BATCHES RECALLED"] ||
      "",
    recallReason: merged["RECALL REASON"] || "",
    returnGoods:
      merged["RETURN GOODS"] ||
      "",

    previousActionsSummary:
      merged["PREVIOUS ACTIONS SUMMARY"] ||
      "",
    commitmentType: merged["COMMITMENT TYPE"] || "",
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
    tableHeaderRow: {
      backgroundColor: "#e0e0e0",
      textTransform: "uppercase",
    },
    subSectionLabel: {
      fontWeight: "normal",
      paddingLeft: "15px",
    },
  };

  // --- Helpers ---
  const renderTableRow = (label, value, isHeader = false) => (
    <tr style={isHeader ? styles.tableHeaderRow : {}}>
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

  const renderSubRow = (label, value) => (
    <tr>
      <td style={{ ...styles.td, ...styles.tdLabel, ...styles.subSectionLabel }}>
        {label}
      </td>
      <td style={styles.tdDelimiter}>:</td>
      <td style={styles.tdData}>{value}</td>
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

      {/* VII. Stability */}
      <h3 style={styles.sectionHeading}>VII. Review of stability data:</h3>
      <table style={styles.table}>
        <tbody>
          {renderTableRow(
            "No of batches included for the stability study and reason for their selection",
            info.stabilityBatches
          )}
          {renderTableRow(
            "Review/summary of the results obtained from the stability program",
            info.stabilityResultsSummary
          )}
        </tbody>
      </table>

      {/* VIII. Complaints / Recalls */}
      <h3 style={styles.sectionHeading}>
        VIII. Review of Complaints, Recalls, Return goods:
      </h3>
      <table style={styles.table}>
        <tbody>
          {renderTableRow("No. of complaints received", info.complaintsReceived, true)}
          {renderSubRow("Quality complaints", info.complaintsReceived)}
          {renderSubRow("Packaging complaints", info.complaintsReceived)}
          {renderSubRow("Other complaints", info.complaintsReceived)}
          {renderTableRow("Status of related CAPAS", info.capaStatus)}
          {renderTableRow("No. of batches recalled", info.batchesRecalled)}
          {renderTableRow("Reason for recall", info.recallReason)}
          {renderTableRow("Return goods", info.returnGoods)}
        </tbody>
      </table>

      {/* IX. Corrective Actions */}
      <h3 style={styles.sectionHeading}>
        IX. Review of adequacy of any other previous, product process or equipment corrective actions:
      </h3>
      <table style={styles.table}>
        <tbody>
          {renderTableRow(
            "Summary of all the corrective actions from the previous product quality review reports, their implementation status and effectiveness.",
            info.previousActionsSummary
          )}
        </tbody>
      </table>

      {/* X. Post-Marketing Commitments */}
      <h3 style={styles.sectionHeading}>
        X. Review of Post-Marketing commitments for new marketing authorizations:
      </h3>
      <table style={styles.table}>
        <tbody>{renderTableRow("Type of commitment", info.commitmentType)}</tbody>
      </table>
    </div>
  );
};

export default PQRReviewContForm3;
