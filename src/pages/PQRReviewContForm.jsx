import React from 'react';

const PQRReviewContFormFixed = () => {
  // Dummy data based on the PDF content (Unchanged)
  const data = {
    // Header/Footer Info
    company: 'CADILA PHARMACEUTICALS LIMITED',
    annexure: 'ANNEXURE - I (Ref. SOP No. DQA 011)',
    page: 'Page: 3 of 7',
    formNo: 'FORM NO. FDQA011-01-13',

    // Product Info (Continued)
    productName: 'Clindamycin Capsules 150 mg',
    productCode: 'EC060',
    market: 'Export (Somex Pharma-UK)',
    reviewPeriod: '1st JANUARY 2024 to 28th FEBRUARY 2025',
    noOfSitesRejected: 'Not applicable',
    batchesUnderHold: 'None of the batch has been under hold during this period.',

    // I. Review of Starting Materials and Packaging Materials
    rawMaterialsReview: 'TSE/BSE free certificate & Technical Agreement of all raw materials has been reviewed and found satisfactory. Refer Attachment IIA',
    rawMaterialsAttachment: 'Refer attachment Ia to If',
    primaryPackagingReview: 'TSE/BSE free certificate & Technical Agreement of all primary packaging materials has been reviewed and found satisfactory. Refer Attachment IIA',

    // II. Review of critical in process control and finished product results
    inProcessResults: 'In process - results of all batches has been reviewed and found satisfactory.',
    inProcessResultsAttachment: 'Refer attachment B for in process results and attachment C for yield results.',
    finishedProductAnalysis: 'Finished product results of all batches has been reviewed and found satisfactory. Refer attachment A for finished product results.',

    // III. A review of all batches that failed to meet established specification(s) and out of trend results
    oosOotSummary: 'One OOS has been observed during this review period. OOS no:- OOS/MPB/005/24. Attachment no: VIII. No OOT has been observed during this review period.',
    capaStatus: 'Not applicable',

    // IV. Review of all deviations
    deviationsSummary: 'No deviation has been Observed for this product during the review period.',
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      // FIX: Changed absolute positioning to margin: auto for normal document flow (Horizontal Centering)
      margin: '20px auto', 
      padding: '20px',
      border: '1px solid #000',
    },
    // --- HEADER BLOCK STYLES (Reduced Spacing) ---
    headerBlock: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '2px solid #000',
      paddingBottom: '3px',
      marginBottom: '5px',
      fontSize: '10px',
    },
    headerText: {
      lineHeight: '1.2',
      fontWeight: 'bold',
      margin: '0',
    },
    headerRightText: {
      textAlign: 'right',
      margin: '0',
    },
    formNoBottom: {
      fontSize: '10px',
      marginBottom: '10px',
      textAlign: 'right',
    },
    // --- TITLE STYLES (Reduced Spacing) ---
    pqrTitle: {
      textAlign: 'center',
      fontSize: '16px',
      margin: '10px 0',
      padding: '5px',
      fontWeight: 'bold',
    },
    // --- TABLE STYLES (Reduced Spacing) ---
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '10px',
      zIndex: 2,
      position: 'relative',
    },
    td: {
      border: '1px solid #000',
      padding: '4px',
      fontSize: '12px',
      verticalAlign: 'top',
    },
    tdLabel: {
      width: '35%',
      fontWeight: 'bold',
    },
    tdDelimiter: {
      width: '10px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    tdData: {
      width: '60%',
    },
    sectionHeading: {
        fontSize: '14px',
        fontWeight: 'bold',
        padding: '2px 0',
        marginBottom: '3px',
    },
    tableHeaderRow: {
        backgroundColor: '#e0e0e0',
        textTransform: 'uppercase',
    },
    // Style for combined data lines (to remove extra line breaks)
    combinedData: {
      display: 'block',
      marginBottom: '3px',
    }
  };

  // Helper function to render a table row
  const renderTableRow = (label, data, isHeaderRow = false) => (
    <tr style={isHeaderRow ? styles.tableHeaderRow : {}}>
      <td style={{ ...styles.td, ...styles.tdLabel, ...(isHeaderRow ? {backgroundColor: '#e0e0e0'} : {}) }}>{label}</td>
      <td style={{ ...styles.td, ...styles.tdDelimiter, ...(isHeaderRow ? {backgroundColor: '#e0e0e0'} : {}) }}>:</td>
      <td style={{ ...styles.td, ...styles.tdData }}>{data}</td>
    </tr>
  );

  return (
    <div style={styles.container}>
      {/* --- HEADER BLOCK --- */}
      <div style={styles.headerBlock}>
        <div style={styles.headerLeft}>
          <p style={styles.headerText}>
            **CADILA**
            <br />
            **PHARMACEUTICALS**
            <br />
            **LIMITED**
          </p>
        </div>
        <div style={styles.headerRight}>
          <p style={styles.headerRightText}>{data.annexure}</p>
          <p style={styles.headerRightText}>{data.page}</p>
        </div>
      </div>
      <p style={styles.formNoBottom}>{data.formNo}</p>

      {/* --- PQR REPORT TITLE --- */}
      <h2 style={{...styles.pqrTitle, borderBottom: '1px solid #000'}}>PRODUCT QUALITY REVIEW (PQR)</h2>

      {/* --- PRODUCT INFORMATION (Cont.) BLOCK --- */}
      <table style={styles.table}>
        <thead>
            {renderTableRow('PRODUCT INFORMATION', '', true)}
        </thead>
        <tbody>
            {renderTableRow('Product name', data.productName)}
            {renderTableRow('Product code', data.productCode)}
            {renderTableRow('Market', data.market)}
            {renderTableRow('Review period', data.reviewPeriod)}
            {renderTableRow('No. of sites / Countries in which product is rejected', data.noOfSitesRejected)}
            {renderTableRow('No. of batches under hold and Reason for hold', data.batchesUnderHold)}
        </tbody>
      </table>

      {/* --- I. REVIEW OF STARTING MATERIALS AND PACKAGING MATERIALS --- */}
      <h3 style={styles.sectionHeading}>I. Review of Starting Materials and Packaging Materials.</h3>
      <table style={styles.table}>
        <tbody>
            {/* Review of the Raw materials */}
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>Review of the Raw materials</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>
                    <span style={styles.combinedData}>{data.rawMaterialsReview}</span>
                    <span style={styles.combinedData}>{data.rawMaterialsAttachment}</span>
                </td>
            </tr>
            {/* Review of the Primary Packaging materials */}
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>Review of the Primary Packaging materials</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>
                    {data.primaryPackagingReview}
                </td>
            </tr>
        </tbody>
      </table>

      {/* --- II. REVIEW OF CRITICAL IN PROCESS CONTROL AND FINISHED PRODUCT RESULTS --- */}
      <h3 style={styles.sectionHeading}>II. Review of critical in process control and finished product results:</h3>
      <table style={styles.table}>
        <tbody>
            {/* Review of the in process-results during the manufacturing */}
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>Review of the in process-results during the manufacturing</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>
                    <span style={styles.combinedData}>{data.inProcessResults}</span>
                    <span style={styles.combinedData}>{data.inProcessResultsAttachment}</span>
                </td>
            </tr>
            {/* Review of the Finished Product analysis */}
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>Review of the Finished Product analysis</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>
                    {data.finishedProductAnalysis}
                </td>
            </tr>
        </tbody>
      </table>

      {/* --- III. A REVIEW OF ALL BATCHES THAT FAILED TO MEET ESTABLISHED SPECIFICATION(S) AND OUT OF TREND RESULTS --- */}
      <h3 style={styles.sectionHeading}>III. A review of all batches that failed to meet established specification(s) and out of trend results:</h3>
      <table style={styles.table}>
        <tbody>
            {/* Summary of the OOS/OOT and their investigations */}
            {renderTableRow('Summary of the OOS/OOT and their investigations', data.oosOotSummary)}
            {/* Status of related CAPAs */}
            {renderTableRow('Status of related CAPAs', data.capaStatus)}
        </tbody>
      </table>

      {/* --- IV. REVIEW OF ALL DEVIATIONS --- */}
      <h3 style={styles.sectionHeading}>IV. Review of all deviations:</h3>
      <table style={styles.table}>
        <tbody>
            {/* Summary of all deviations */}
            {renderTableRow('Summary of all deviations', data.deviationsSummary)}
        </tbody>
      </table>
    </div>
  );
};

export default PQRReviewContFormFixed;