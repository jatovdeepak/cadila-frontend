import React from "react";

const ProductInformationForm = ({ data = {} }) => {
  console.log("data from product information form", data);

  // Safely extract nested mergedJson
  const merged = data?.mergedJson || {};

  // Safely map fields with fallback values
  const safe = {
    productName: merged["PRODUCT NAME"] || "",
    productCode: merged["PRODUCT CODE"] || "",
    market: merged["MARKET"] || "",
    reviewPeriod: merged["REVIEW PERIOD"] || "",

    // General Information
    genericName: merged["GENERIC NAME"] || "",
    description: merged["DESCRIPTION"] || "",
    labelClaim: merged["LABEL CLAIM"] || "",
    standardBatchSize: merged["STANDARD BATCH SIZE"] || "N/A",
    shelfLife: merged["SHELF LIFE"] || "",
    storageCondition: merged["STORAGE CONDITION"] || "",
    mfgLocation: merged["MANUFACTURING LOCATION"] || "",
    licenceNo: merged["LICENCE NO"] || "",
    packingDetail: merged["PACK"] || "",
    // packingDetail2: merged["PACK"] || "",
    noOfBatches: merged["NO. OF BATCHES MANUFACTURED"] || "",
    batchNos: merged["BATCH NOS"] || "",
    noOfNonStandardBatches: merged["NO OF NON STANDARD BATCHES"] || "",
    noOfBatchesReleased: merged["NO. OF BATCHES RELEASED"] || "",
    batchesRejected: merged["BATCHES REJECTED"] || "",

    // Header/Footer Info
    header: {
      company: merged["COMPANY NAME"] || "",
      annexure:
        merged["ANNEXURE"] || "",
      page: merged["PAGE"] || "Page: 2 of 7",
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
      position: "relative",
    },
    headerBlock: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "2px solid #000",
      paddingBottom: "5px",
      marginBottom: "10px",
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
      marginBottom: "20px",
      textAlign: "right",
    },
    pqrTitle: {
      textAlign: "center",
      fontSize: "16px",
      margin: "20px 0",
      padding: "5px",
    },
    infoBlock: {
      display: "grid",
      gridTemplateColumns: "150px 10px 1fr",
      gap: "5px",
      fontSize: "12px",
      marginBottom: "20px",
      border: "1px solid #000",
      padding: "10px",
    },
    infoLabel: {
      fontWeight: "bold",
    },
    infoDelimiter: {
      fontWeight: "bold",
      textAlign: "center",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "20px",
      zIndex: 2,
      position: "relative",
    },
    tdLabel: {
      width: "35%",
      fontWeight: "bold",
      backgroundColor: "#f0f0f0",
      textTransform: "uppercase",
      border: "1px solid #000",
      padding: "8px",
    },
    tdDelimiter: {
      width: "10px",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor: "#f0f0f0",
      border: "1px solid #000",
      padding: "8px",
    },
    tdData: {
      width: "60%",
      border: "1px solid #000",
      padding: "8px",
      fontSize: "12px",
      verticalAlign: "top",
    },
    tableHeader: {
      border: "1px solid #000",
      padding: "8px",
      fontSize: "14px",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor: "#e0e0e0",
    },
  };

  const renderTableRow = (label, value) => (
    <tr>
      <td style={styles.tdLabel}>{label}</td>
      <td style={styles.tdDelimiter}>:</td>
      <td style={styles.tdData}>{value}</td>
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
      <h2 style={styles.pqrTitle}>PRODUCT QUALITY REVIEW (PQR)</h2>
      <h3 style={{ ...styles.pqrTitle, border: "none", margin: "10px 0" }}>
        PRODUCT INFORMATION
      </h3>

      {/* --- PRODUCT INFO BLOCK --- */}
      <div style={styles.infoBlock}>
        <span style={styles.infoLabel}>Product name</span>
        <span style={styles.infoDelimiter}>:</span>
        <span>{safe.productName}</span>

        <span style={styles.infoLabel}>Product code</span>
        <span style={styles.infoDelimiter}>:</span>
        <span>{safe.productCode}</span>

        <span style={styles.infoLabel}>Market</span>
        <span style={styles.infoDelimiter}>:</span>
        <span>{safe.market}</span>

        <span style={styles.infoLabel}>Review period</span>
        <span style={styles.infoDelimiter}>:</span>
        <span>{safe.reviewPeriod}</span>
      </div>

      {/* --- GENERAL INFORMATION TABLE --- */}
      <table style={styles.table}>
        <thead>
          <tr>
            <td colSpan="3" style={styles.tableHeader}>
              General Information about the product
            </td>
          </tr>
        </thead>
        <tbody>
          {renderTableRow("Generic Name of Product", safe.genericName)}
          {renderTableRow("Description of Product", safe.description)}
          {renderTableRow("Label claim", safe.labelClaim)}
          {renderTableRow("Shelf Life", safe.shelfLife)}
          {renderTableRow("Storage Condition", safe.storageCondition)}
          {renderTableRow("Manufacturing location", safe.mfgLocation)}
          {renderTableRow("Licence No.", safe.licenceNo)}
          {renderTableRow(
            "Packing Detail",
            `${safe.packingDetail}`
          )}
          {renderTableRow(
            "No. of batches manufactured",
            safe.noOfBatches
          )}
          {renderTableRow("Batch Nos.", safe.batchNos)}
          {renderTableRow(
            "No. of Batches of non-standard batch sizes",
            safe.noOfNonStandardBatches
          )}
          {renderTableRow(
            "No. of batches released",
            safe.noOfBatchesReleased
          )}
          {renderTableRow(
            "No. of batches rejected and reason for rejection",
            safe.batchesRejected
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductInformationForm;
