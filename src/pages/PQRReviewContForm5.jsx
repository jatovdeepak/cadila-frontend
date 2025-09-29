import React from 'react';

const PQRReviewContForm5 = () => {
  // Dummy data based on the content of Clindamycin capsules 150 mg EC060-7.pdf (Page 7)
  const data = {
    // Header/Footer Info
    company: 'CADILA PHARMACEUTICALS LIMITED',
    annexure: 'ANNEXURE - I (Ref. SOP No. DQA 011)',
    page: 'Page: 7 of 7',
    formNo: 'FORM NO. FDQA011-01-13',

    // Product Info (for header consistency)
    productName: 'Clindamycin Capsules 150 mg',
    productCode: 'EC060',
    market: 'Export (Somex Pharma-UK)',
    reviewPeriod: '1st JANUARY 2024 to 28th FEBRUARY 2025',
    
    // Continued List of Attachments (from Page 6)
    attachmentsCont: [
        {no: 'Id', name: 'Excipient (Purified Talc Ph.Eur'},
        {no: 'Ie', name: 'Excipient (Magnesium Stearate'},
        {no: 'If', name: 'Excipient (Size "1" Empty Hard Gelatin Capsule With White Color Cap & White Color Body On The Body Imprinted "C150" IH)'}
    ],

    // Main List of Attachments (The Table)
    attachmentList: [
        {no: 'II', name: 'Review of Primary Packaging Material & Secondary Packaging Material'},
        {no: 'IIA', name: 'Availability of TSE BSE Certificate & Technical Agreement'},
        {no: 'IIB', name: 'Primary Packing Material (158 x 0.025 mm Printed Foil with NC'},
        {no: 'IIC', name: 'Primary Packing Material (164 x 0.25 mm Non Toxic Clear PVC'},
        {no: 'III', name: 'Qualification Status of Equipment, HVAC system & Utilities'},
        {no: 'IV', name: 'Summary'},
        {no: 'V', name: 'Review of contracts/ agreement to confirm with their current requirements and validity.'},
        {no: 'VI', name: 'Change Control Summary'},
        {no: 'VII', name: 'CAPA Summary'},
        {no: 'VIII', name: 'OOS Detail'},
        {no: 'IX', name: 'Stability Data Sheet'}, // Implied by sequence, based on document structure
        {no: 'A', name: 'Quality Data Attributes'},
        {no: 'B', name: 'In Process Data Attributes'},
        {no: 'C', name: 'Manufacturing Data Attributes'},
    ],
    
    // Conclusion
    conclusion: 'Refer Enclosure I',
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
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
      width: '40%', 
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
    attachmentTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '10px',
        fontSize: '12px',
    },
    attachmentTh: {
        border: '1px solid #000',
        padding: '4px',
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    attachmentTd: {
        border: '1px solid #000',
        padding: '4px',
    },
    conclusionSection: {
        textAlign: 'center',
        padding: '10px',
        border: '1px solid #000',
        fontWeight: 'bold',
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
        </tbody>
      </table>

      {/* --- LIST OF ATTACHMENTS (Cont. from Page 6) --- */}
      <h3 style={styles.sectionHeading}>List of Attachments (Continued):</h3>
      <table style={styles.attachmentTable}>
        <thead>
            <tr>
                <th style={styles.attachmentTh}>Attachment No.</th>
                <th style={styles.attachmentTh}>Name of Document</th>
            </tr>
        </thead>
        <tbody>
            {/* Continued Attachments from Page 6 */}
            {data.attachmentsCont.map((item, index) => (
                <tr key={`cont-${index}`}>
                    <td style={{...styles.attachmentTd, textAlign: 'center', width: '20%'}}>{item.no}</td>
                    <td style={styles.attachmentTd}>{item.name}</td>
                </tr>
            ))}
            {/* Main Attachment List (The Table on Page 7) */}
            {data.attachmentList.map((item, index) => (
                <tr key={`main-${index}`}>
                    <td style={{...styles.attachmentTd, textAlign: 'center', width: '20%'}}>{item.no}</td>
                    <td style={styles.attachmentTd}>{item.name}</td>
                </tr>
            ))}
        </tbody>
      </table>

      {/* --- CONCLUSION --- */}
      <h3 style={styles.sectionHeading}>Conclusion:</h3>
      <div style={styles.conclusionSection}>
          <p>{data.conclusion}</p>
      </div>
      
    </div>
  );
};

export default PQRReviewContForm5;