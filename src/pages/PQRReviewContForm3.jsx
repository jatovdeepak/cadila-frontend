import React from 'react';

const PQRReviewContForm3 = () => {
  // Dummy data based on the content of Clindamycin capsules 150 mg EC060-5.pdf (Page 5)
  const data = {
    // Header/Footer Info
    company: 'CADILA PHARMACEUTICALS LIMITED',
    annexure: 'ANNEXURE - I (Ref. SOP No. DQA 011)',
    page: 'Page: 5 of 7',
    formNo: 'FORM NO. FDQA011-01-13',

    // Product Info (for header consistency)
    productName: 'Clindamycin Capsules 150 mg',
    productCode: 'EC060',
    market: 'Export (Somex Pharma-UK)',
    reviewPeriod: '1st JANUARY 2024 to 28th FEBRUARY 2025',

    // VII. Review of stability data:
    stabilityBatches: 'One Batch has been charged for long term Stability Study.',
    stabilityResultsSummary: 'Not Applicable',

    // VIII. Review of Complaints, Recalls, Return goods:
    complaintsReceived: 'Not Applicable',
    capaStatus: 'Not Applicable',
    batchesRecalled: 'None of the batch has been recalled during the review period.',
    recallReason: 'Not Applicable',
    returnGoods: 'None of the batch has been returned during the review period',

    // IX. Review of adequacy of any other previous, product process or equipment corrective actions:
    previousActionsSummary: 'No corrective actions are pending from the previous product quality review reports.',

    // X. Review of Post-Marketing commitments for new marketing authorizations:
    commitmentType: 'Not Applicable',
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      // Horizontal centering for correct flow
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
      width: '40%', // Slightly wider label column for longer titles
      fontWeight: 'bold',
    },
    tdDelimiter: {
      width: '10px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    tdData: {
      width: '55%',
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
    subSectionLabel: {
        fontWeight: 'normal',
        paddingLeft: '15px',
    },
  };

  // Helper function to render a table row
  const renderTableRow = (label, data, isHeaderRow = false) => (
    <tr style={isHeaderRow ? styles.tableHeaderRow : {}}>
      <td style={{ ...styles.td, ...styles.tdLabel, ...(isHeaderRow ? {backgroundColor: '#e0e0e0'} : {}) }}>{label}</td>
      <td style={{ ...styles.td, ...styles.tdDelimiter, ...(isHeaderRow ? {backgroundColor: '#e0e0e0'} : {}) }}>:</td>
      <td style={{ ...styles.td, ...styles.tdData }}>{data}</td>
    </tr>
  );
  
  // Helper function to render a sub-section row (for complaints breakdown)
  const renderSubRow = (label, data) => (
      <tr>
          <td style={{ ...styles.td, ...styles.tdLabel, ...styles.subSectionLabel }}>{label}</td>
          <td style={styles.tdDelimiter}>:</td>
          <td style={styles.tdData}>{data}</td>
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
        </tbody>
      </table>

      {/* --- VII. REVIEW OF STABILITY DATA --- */}
      <h3 style={styles.sectionHeading}>VII. Review of stability data:</h3>
      <table style={styles.table}>
        <tbody>
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>No of batches included for the stability study and reason for their selection</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>{data.stabilityBatches}</td>
            </tr>
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>Review/summary of the results obtained from the stability program</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>{data.stabilityResultsSummary}</td>
            </tr>
        </tbody>
      </table>

      {/* --- VIII. REVIEW OF COMPLAINTS, RECALLS, RETURN GOODS --- */}
      <h3 style={styles.sectionHeading}>VIII. Review of Complaints, Recalls, Return goods:</h3>
      <table style={styles.table}>
        <tbody>
            {/* No. of complaints received breakdown */}
            {renderTableRow('No. of complaints received', data.complaintsReceived, true)}
            {renderSubRow('Quality complaints', data.complaintsReceived)}
            {renderSubRow('Packaging complaints', data.complaintsReceived)}
            {renderSubRow('Other complaints', data.complaintsReceived)}
            
            {renderTableRow('Status of related CAPAS', data.capaStatus)}
            
            {renderTableRow('No. of batches recalled', data.batchesRecalled)}
            
            {renderTableRow('Reason for recall', data.recallReason)}
            
            {renderTableRow('Return goods', data.returnGoods)}

        </tbody>
      </table>

      {/* --- IX. REVIEW OF ADEQUACY OF ANY OTHER PREVIOUS, PRODUCT PROCESS OR EQUIPMENT CORRECTIVE ACTIONS --- */}
      <h3 style={styles.sectionHeading}>IX. Review of adequacy of any other previous, product process or equipment corrective actions:</h3>
      <table style={styles.table}>
        <tbody>
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>Summary of all the corrective actions from the previous product quality review reports, their implementation status and effectiveness.</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>{data.previousActionsSummary}</td>
            </tr>
        </tbody>
      </table>
      
      {/* --- X. REVIEW OF POST-MARKETING COMMITMENTS FOR NEW MARKETING AUTHORIZATIONS --- */}
      <h3 style={styles.sectionHeading}>X. Review of Post-Marketing commitments for new marketing authorizations:</h3>
      <table style={styles.table}>
        <tbody>
            {renderTableRow('Type of commitment', data.commitmentType)}
        </tbody>
      </table>
    </div>
  );
};

export default PQRReviewContForm3;