import React from "react";

const PQRReviewContFormFixed = ({ data = {} }) => {
  console.log("data from PQR review continued form", data);

  // Safely extract nested mergedJson
  const merged = data?.mergedJson || {};

  // Safely map all fields with default fallbacks
  const safe = {
    // Header/Footer Info
    header: {
      company: merged["COMPANY NAME"] || "",
      annexure:
        merged["ANNEXURE"] || "",
      page: merged["PAGE"] || "Page: 3 of 7",
      formNo: merged["FORM NO"] || "",
    },

    // Product Info (Continued)
    productName: merged["PRODUCT NAME"] || "",
    productCode: merged["PRODUCT CODE"] || "",
    market: merged["MARKET"] || "",
    reviewPeriod: merged["REVIEW PERIOD"] || "",
    noOfSitesRejected:
      merged["NO OF SITES REJECTED"] ||
      "",
    batchesUnderHold:
      merged["BATCHES UNDER HOLD"] ||
      "",

    // I. Review of Starting Materials and Packaging Materials
    rawMaterialsReview:
      merged["RAW MATERIALS REVIEW"] ||
      "",
    rawMaterialsAttachment:
      merged["RAW MATERIALS ATTACHMENT"] ||
      "",
    primaryPackagingReview:
      merged["PRIMARY PACKAGING REVIEW"] ||
      "",

    // II. Review of critical in process control and finished product results
    inProcessResults:
      merged["IN PROCESS RESULTS"] ||
      "",
    inProcessResultsAttachment:
      merged["IN PROCESS RESULTS ATTACHMENT"] ||
      "",
    finishedProductAnalysis:
      merged["FINISHED PRODUCT ANALYSIS"] ||
      "",

    // III. OOS/OOT
    oosOotSummary:
      merged["OOS OOT SUMMARY"] ||
      "",
    capaStatus: merged["CAPA STATUS"] || "",

    // IV. Deviations
    deviationsSummary:
      merged["DEVIATIONS SUMMARY"] ||
      "",
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
      width: "35%",
      fontWeight: "bold",
    },
    tdDelimiter: {
      width: "10px",
      textAlign: "center",
      fontWeight: "bold",
    },
    tdData: {
      width: "60%",
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
    combinedData: {
      display: "block",
      marginBottom: "3px",
    },
  };

  const renderTableRow = (label, value, isHeaderRow = false) => (
    <tr style={isHeaderRow ? styles.tableHeaderRow : {}}>
      <td
        style={{
          ...styles.td,
          ...styles.tdLabel,
          ...(isHeaderRow ? { backgroundColor: "#e0e0e0" } : {}),
        }}
      >
        {label}
      </td>
      <td
        style={{
          ...styles.td,
          ...styles.tdDelimiter,
          ...(isHeaderRow ? { backgroundColor: "#e0e0e0" } : {}),
        }}
      >
        :
      </td>
      <td style={{ ...styles.td, ...styles.tdData }}>{value}</td>
    </tr>
  );

  return (
    <div style={styles.container}>
      {/* --- HEADER --- */}
      <div style={styles.headerBlock}>
        <div>
          <p style={styles.headerText}>{safe.header.company}</p>
        </div>
        <div>
          <p style={styles.headerRightText}>{safe.header.annexure}</p>
          <p style={styles.headerRightText}>{safe.header.page}</p>
        </div>
      </div>
      <p style={styles.formNoBottom}>{safe.header.formNo}</p>

      {/* --- TITLE --- */}
      <h2
        style={{ ...styles.pqrTitle, borderBottom: "1px solid #000" }}
      >
        PRODUCT QUALITY REVIEW (PQR)
      </h2>

      {/* --- PRODUCT INFORMATION (Continued) --- */}
      <table style={styles.table}>
        <thead>{renderTableRow("PRODUCT INFORMATION", "", true)}</thead>
        <tbody>
          {renderTableRow("Product name", safe.productName)}
          {renderTableRow("Product code", safe.productCode)}
          {renderTableRow("Market", safe.market)}
          {renderTableRow("Review period", safe.reviewPeriod)}
          {renderTableRow(
            "No. of sites / Countries in which product is rejected",
            safe.noOfSitesRejected
          )}
          {renderTableRow(
            "No. of batches under hold and Reason for hold",
            safe.batchesUnderHold
          )}
        </tbody>
      </table>

      {/* --- I. REVIEW OF STARTING MATERIALS AND PACKAGING MATERIALS --- */}
      <h3 style={styles.sectionHeading}>
        I. Review of Starting Materials and Packaging Materials
      </h3>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={{ ...styles.td, ...styles.tdLabel }}>
              Review of the Raw materials
            </td>
            <td style={styles.tdDelimiter}>:</td>
            <td style={styles.tdData}>
              <span style={styles.combinedData}>
                {safe.rawMaterialsReview}
              </span>
              <span style={styles.combinedData}>
                {safe.rawMaterialsAttachment}
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.tdLabel }}>
              Review of the Primary Packaging materials
            </td>
            <td style={styles.tdDelimiter}>:</td>
            <td style={styles.tdData}>
              {safe.primaryPackagingReview}
            </td>
          </tr>
        </tbody>
      </table>

      {/* --- II. REVIEW OF CRITICAL IN PROCESS CONTROL AND FINISHED PRODUCT RESULTS --- */}
      <h3 style={styles.sectionHeading}>
        II. Review of critical in process control and finished product results
      </h3>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={{ ...styles.td, ...styles.tdLabel }}>
              Review of the in process-results during the manufacturing
            </td>
            <td style={styles.tdDelimiter}>:</td>
            <td style={styles.tdData}>
              <span style={styles.combinedData}>
                {safe.inProcessResults}
              </span>
              <span style={styles.combinedData}>
                {safe.inProcessResultsAttachment}
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.tdLabel }}>
              Review of the Finished Product analysis
            </td>
            <td style={styles.tdDelimiter}>:</td>
            <td style={styles.tdData}>{safe.finishedProductAnalysis}</td>
          </tr>
        </tbody>
      </table>

      {/* --- III. OOS/OOT --- */}
      <h3 style={styles.sectionHeading}>
        III. A review of all batches that failed to meet established
        specification(s) and out of trend results
      </h3>
      <table style={styles.table}>
        <tbody>
          {renderTableRow(
            "Summary of the OOS/OOT and their investigations",
            safe.oosOotSummary
          )}
          {renderTableRow("Status of related CAPAs", safe.capaStatus)}
        </tbody>
      </table>

      {/* --- IV. DEVIATIONS --- */}
      <h3 style={styles.sectionHeading}>IV. Review of all deviations</h3>
      <table style={styles.table}>
        <tbody>
          {renderTableRow("Summary of all deviations", safe.deviationsSummary)}
        </tbody>
      </table>
    </div>
  );
};

export default PQRReviewContFormFixed;
