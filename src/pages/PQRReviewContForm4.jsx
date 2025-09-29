import React from 'react';

const PQRReviewContForm4 = () => {
  // Dummy data based on the content of Clindamycin capsules 150 mg EC060-6.pdf (Page 6)
  const data = {
    // Header/Footer Info
    company: 'CADILA PHARMACEUTICALS LIMITED',
    annexure: 'ANNEXURE - I (Ref. SOP No. DQA 011)',
    page: 'Page: 6 of 7', // Corresponds to [cite: 88] data
    formNo: 'FORM NO. FDQA011-01-13',

    // Product Info (for header consistency)
    productName: 'Clindamycin Capsules 150 mg',
    productCode: 'EC060',
    market: 'Export (Somex Pharma-UK)',
    reviewPeriod: '1st JANUARY 2024 to 28th FEBRUARY 2025',

    // X. Review of Post-Marketing commitments (Cont. from Page 5)
    statusOfCommitments: 'EC060E4001 was charged for stability study.',
    postMarketingCommitments: 'No commitments for above product.',

    // XI. Review of Validations /Qualifications
    processValidation: 'No process validation study has been carried out during the review period.',
    equipmentQualification: 'Refer attachment-',

    // XII. Review of any related technical agreement
    technicalAgreement: 'Updated technical agreement for above product is available. Refer Attachment: X.',

    // XIII. Review of environmental monitoring and water analysis data
    environmentalData: 'Complies as per reference report no: EM/2024 & WT/2024 respectively.',

    // XIV. Batch conversion details
    batchConversion: 'Not Applicable',
    
    // List of Attachments (First three items)
    attachments: [
        {no: 'Ia', name: 'API (Clindamycin HCl Equivalent To Clindamycin 150 mg Ph.Eur.'},
        {no: 'Ib', name: 'Excipient (Lactose Monohydrate (Flowlac 100) Ph.Eur)'},
        {no: 'Ic', name: 'Excipient (Pregelatinised Starch (Starch 1500 LM) Ph. Eur.)'}
    ]
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

      {/* --- X. REVIEW OF POST-MARKETING COMMITMENTS (Cont.) --- */}
      <h3 style={styles.sectionHeading}>X. Review of Post-Marketing commitments for new marketing authorizations (Cont.):</h3>
      <table style={styles.table}>
        <tbody>
            {renderTableRow('Status of the post marketing commitments', data.statusOfCommitments)}
            {renderTableRow('Post marketing commitments (for old and new approval)', data.postMarketingCommitments)}
        </tbody>
      </table>

      {/* --- XI. REVIEW OF VALIDATIONS /QUALIFICATIONS --- */}
      <h3 style={styles.sectionHeading}>XI. Review of Validations /Qualifications:</h3>
      <table style={styles.table}>
        <tbody>
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>Process Validation studies carried out on (With type of validation / reason for validation)</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>{data.processValidation}</td>
            </tr>
            {renderTableRow('The qualification status of relevant equipment and utilities', data.equipmentQualification)}
        </tbody>
      </table>

      {/* --- XII. REVIEW OF ANY RELATED TECHNICAL AGREEMENT --- */}
      <h3 style={styles.sectionHeading}>XII. Review of any related technical agreement:</h3>
      <table style={styles.table}>
        <tbody>
            <tr>
                <td style={{...styles.td, ...styles.tdLabel}}>Review of related technical agreement (if any) to see whether any update is required.</td>
                <td style={styles.tdDelimiter}>:</td>
                <td style={styles.tdData}>{data.technicalAgreement}</td>
            </tr>
        </tbody>
      </table>

      {/* --- XIII. REVIEW OF ENVIRONMENTAL MONITORING AND WATER ANALYSIS DATA --- */}
      <h3 style={styles.sectionHeading}>XIII. Review of environmental monitoring and water analysis data:</h3>
      <table style={styles.table}>
        <tbody>
            {renderTableRow('Review of environmental monitoring and water analysis data', data.environmentalData)}
        </tbody>
      </table>

      {/* --- XIV. BATCH CONVERSION DETAILS --- */}
      <h3 style={styles.sectionHeading}>XIV. Batch conversion details:</h3>
      <table style={styles.table}>
        <tbody>
            {renderTableRow('Batch conversion details in line with customer requirements', data.batchConversion)}
        </tbody>
      </table>

      {/* --- LIST OF ATTACHMENTS --- */}
      <h3 style={styles.sectionHeading}>List of Attachments:</h3>
      <table style={styles.attachmentTable}>
        <thead>
            <tr>
                <th style={styles.attachmentTh}>Attachment No.</th>
                <th style={styles.attachmentTh}>Name of Document</th>
            </tr>
        </thead>
        <tbody>
            {data.attachments.map((item, index) => (
                <tr key={index}>
                    <td style={{...styles.attachmentTd, textAlign: 'center'}}>{item.no}</td>
                    <td style={styles.attachmentTd}>{item.name}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PQRReviewContForm4;