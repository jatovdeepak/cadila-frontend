import React from 'react';

const PQRReviewContForm2 = () => {
  // Dummy data based on the content of Clindamycin capsules 150 mg EC060-4.pdf (Page 4)
  const data = {
    // Header/Footer Info
    company: 'CADILA PHARMACEUTICALS LIMITED',
    annexure: 'ANNEXURE - I (Ref. SOP No. DQA 011)',
    page: 'Page: 4 of 7',
    formNo: 'FORM NO. FDQA011-01-13',

    // Product Info (Cont.)
    productName: 'Clindamycin Capsules 150 mg',
    productCode: 'EC060',
    market: 'Export (Somex Pharma-UK)',
    reviewPeriod: '1st JANUARY 2024 to 28th FEBRUARY 2025',

    // III. A review... (Cont. from Page 3)
    capaStatus: 'Not applicable',

    // Retain sample periodic observation
    retainSampleObservation: 'Physical Observation record of Retain samples has been checked and no abnormal observation has been found during the review period.',

    // Review of any other quality issue (if any)
    qualityIssueReview: 'No quality issue has been reported during the review period.',

    // V. Review of change controls:
    processRelatedChanges: 'No process related changes observed during the review period.',
    analyticalMethodChanges: 'No change has been reported with respect to Analytical method period.',
    mmdRelatedChange: {
      newCC: 'Four Change Control has been Observed during this review period. Change Control No: P/CC/PFD/ICH/010/24, P/CC/PFD/ICH/035/24, P/CC/PFD/ICH/049/24, PCC-DHLK-RA-24-000, PCC-DHLK-RA-24-0007. Refer Attachment: VI.',
      previousCC: 'One previous year change control also consider in this review period & its still open. Change control no: P/CC/PFD/ICH/47/21.',
    },
    otherChanges: 'Nil',
    impactOfChanges: 'There is no quality impact on product with respect to change control initiated during the review period.',
    changeControlCAPAStatus: 'Refer Attachment: VII',

    // VI. Review of Approved Variation
    implementationOfVariations: 'Nil',
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      // Fixed: Horizontal centering for correct flow
      margin: '20px auto', 
      padding: '20px',
      border: '1px solid #000',
    },
    // --- HEADER BLOCK STYLES (Compact) ---
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
    // --- TITLE STYLES (Compact) ---
    pqrTitle: {
      textAlign: 'center',
      fontSize: '16px',
      margin: '10px 0',
      padding: '5px',
      fontWeight: 'bold',
    },
    // --- TABLE STYLES (Compact) ---
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
    // Style for combined data lines 
    combinedData: {
      display: 'block',
      marginBottom: '3px',
      paddingTop: '3px',
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
          <p style={styles.headerRightText}>{data.annexure} </p>
          <p style={styles.headerRightText}>{data.page} </p>
        </div>
      </div>
      <p style={styles.formNoBottom}>{data.formNo} </p>

      {/* --- PQR REPORT TITLE --- */}
      <h2 style={{...styles.pqrTitle, borderBottom: '1px solid #000'}}>PRODUCT QUALITY REVIEW (PQR) </h2>

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
        </tbody>
      </table>

      {/* --- III. STATUS OF RELATED CAPAS (Cont. from Page 3) --- */}
      <h3 style={styles.sectionHeading}>III. A review of all batches that failed to meet established specification(s) and out of trend results (Cont.):</h3>
      <table style={styles.table}>
        <tbody>
            {renderTableRow('Status of related CAPAs', data.capaStatus)}
        </tbody>
      </table>

      {/* --- RETAIN SAMPLE & QUALITY ISSUE REVIEW --- */}
      <h3 style={styles.sectionHeading}>Retain Sample & Other Quality Issues:</h3>
      <table style={styles.table}>
        <tbody>
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>Retain sample periodic observation (if any abnormal observation)</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>{data.retainSampleObservation} </td>
            </tr>
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>Review of any other quality issue (if any)</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>{data.qualityIssueReview} </td>
            </tr>
        </tbody>
      </table>


      {/* --- V. REVIEW OF CHANGE CONTROLS --- */}
      <h3 style={styles.sectionHeading}>V. Review of change controls: </h3>
      <table style={styles.table}>
        <tbody>
            {/* Process related changes */}
            {renderTableRow('Process related changes', data.processRelatedChanges)}
            {/* Analytical method related changes */}
            {renderTableRow('Analytical method related changes', data.analyticalMethodChanges)}
            {/* MMD related change */}
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>MMD related change</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>
                    <span style={styles.combinedData}>{data.mmdRelatedChange.newCC}</span>
                    <span style={styles.combinedData}>{data.mmdRelatedChange.previousCC}</span>
                </td>
            </tr>
            {/* Other changes */}
            {renderTableRow('Other changes', data.otherChanges)}
            {/* Impact of the changes on the product quality */}
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>Impact of the changes on the product quality</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>{data.impactOfChanges}</td>
            </tr>
            {/* Status of related CAPAs */}
            {renderTableRow('Status of related CAPAs', data.changeControlCAPAStatus)}
        </tbody>
      </table>
      
      {/* --- VI. REVIEW OF APPROVED VARIATION FOR EXISTING MARKETING AUTHORIZATION --- */}
      <h3 style={styles.sectionHeading}>VI. Review of Approved Variation for existing marketing authorization: [cite: 116]</h3>
      <table style={styles.table}>
        <tbody>
            {/* Implementation of approved variations */}
            {renderTableRow('Implementation of approved variations', data.implementationOfVariations)}
        </tbody>
      </table>
    </div>
  );
};

export default PQRReviewContForm2;