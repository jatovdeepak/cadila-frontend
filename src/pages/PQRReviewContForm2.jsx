import React from "react";

const PQRReviewContForm2 = ({ data = {} }) => {
  console.log("data from PQR review continued form 2", data);

  // Safely extract mergedJson
  const merged = data?.mergedJson || {};

  // Safe mapping with fallbacks
  const safe = {
    // Header/Footer Info
    header: {
      company: merged["COMPANY NAME"] || "",
      annexure:
        merged["ANNEXURE"] || "",
      page: merged["PAGE"] || "Page: 4 of 7",
      formNo: merged["FORM NO"] || "",
    },

    // Product Info (Cont.)
    productName: merged["PRODUCT NAME"] || "",
    productCode: merged["PRODUCT CODE"] || "",
    market: merged["MARKET"] || "",
    reviewPeriod: merged["REVIEW PERIOD"] || "",

    // III. CAPA
    capaStatus: merged["CAPA STATUS"] || "",

    // Retain sample periodic observation
    retainSampleObservation:
      merged["RETAIN SAMPLE OBSERVATION"] ||
      "",

    // Review of any other quality issue
    qualityIssueReview:
      merged["QUALITY ISSUE REVIEW"] ||
      "",

    // V. Review of change controls
    processRelatedChanges:
      merged["PROCESS RELATED CHANGES"] ||
      "",
    analyticalMethodChanges:
      merged["ANALYTICAL METHOD CHANGES"] ||
      "",
    mmdRelatedChange: {
      newCC:
        merged["MMD NEW CC"] ||
        "",
      previousCC:
        merged["MMD PREVIOUS CC"] ||
        "",
    },
    otherChanges: merged["OTHER CHANGES"] || "",
    impactOfChanges:
      merged["IMPACT OF CHANGES"] ||
      "",
    changeControlCAPAStatus:
      merged["CHANGE CONTROL CAPA STATUS"] || "",

    // VI. Review of approved variation
    implementationOfVariations:
      merged["IMPLEMENTATION OF VARIATIONS"] || "",
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
      paddingTop: "3px",
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

      {/* --- PRODUCT INFORMATION (Cont.) --- */}
      <table style={styles.table}>
        <thead>{renderTableRow("PRODUCT INFORMATION", "", true)}</thead>
        <tbody>
          {renderTableRow("Product name", safe.productName)}
          {renderTableRow("Product code", safe.productCode)}
          {renderTableRow("Market", safe.market)}
          {renderTableRow("Review period", safe.reviewPeriod)}
        </tbody>
      </table>

      {/* --- III. STATUS OF RELATED CAPAS --- */}
      <h3 style={styles.sectionHeading}>
        III. A review of all batches that failed to meet established
        specification(s) and out of trend results (Cont.)
      </h3>
      <table style={styles.table}>
        <tbody>
          {renderTableRow("Status of related CAPAs", safe.capaStatus)}
        </tbody>
      </table>

      {/* --- RETAIN SAMPLE & QUALITY ISSUE REVIEW --- */}
      <h3 style={styles.sectionHeading}>Retain Sample & Other Quality Issues</h3>
      <table style={styles.table}>
        <tbody>
          {renderTableRow(
            "Retain sample periodic observation (if any abnormal observation)",
            safe.retainSampleObservation
          )}
          {renderTableRow(
            "Review of any other quality issue (if any)",
            safe.qualityIssueReview
          )}
        </tbody>
      </table>

      {/* --- V. REVIEW OF CHANGE CONTROLS --- */}
      <h3 style={styles.sectionHeading}>V. Review of change controls</h3>
      <table style={styles.table}>
        <tbody>
          {renderTableRow(
            "Process related changes",
            safe.processRelatedChanges
          )}
          {renderTableRow(
            "Analytical method related changes",
            safe.analyticalMethodChanges
          )}
          <tr>
            <td style={{ ...styles.td, ...styles.tdLabel }}>
              MMD related change
            </td>
            <td style={styles.tdDelimiter}>:</td>
            <td style={styles.tdData}>
              <span style={styles.combinedData}>
                {safe.mmdRelatedChange.newCC}
              </span>
              <span style={styles.combinedData}>
                {safe.mmdRelatedChange.previousCC}
              </span>
            </td>
          </tr>
          {renderTableRow("Other changes", safe.otherChanges)}
          <tr>
            <td style={{ ...styles.td, ...styles.tdLabel }}>
              Impact of the changes on the product quality
            </td>
            <td style={styles.tdDelimiter}>:</td>
            <td style={styles.tdData}>{safe.impactOfChanges}</td>
          </tr>
          {renderTableRow(
            "Status of related CAPAs",
            safe.changeControlCAPAStatus
          )}
        </tbody>
      </table>

      {/* --- VI. REVIEW OF APPROVED VARIATIONS --- */}
      <h3 style={styles.sectionHeading}>
        VI. Review of Approved Variation for existing marketing authorization
      </h3>
      <table style={styles.table}>
        <tbody>
          {renderTableRow(
            "Implementation of approved variations",
            safe.implementationOfVariations
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PQRReviewContForm2;
