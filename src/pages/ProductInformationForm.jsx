import React from 'react';

const ProductInformationForm = () => {
  // Dummy data based on the PDF content
  const data = {
    // Top Product Info Block
    productName: 'Clindamycin Capsules 150 mg',
    productCode: 'EC060',
    market: 'Export (Somex Pharma-UK)',
    reviewPeriod: '1st JANUARY 2024 to 28th FEBRUARY 2025',

    // General Information Table
    genericName: 'Clindamycin Capsules 150 mg',
    description: 'White to off - white free flowing powder in a capsule with white cap and white body with imprint "C150" on the body.',
    labelClaim: 'Each capsule contains Clindamycin hydrochloride equivalent to 150 mg of Clindamycin.',
    standardBatchSize: 'N/A', // Set to N/A as per manual review of the source data structure
    shelfLife: '24 months from the date of manufacturing.',
    storageCondition: 'Below 25°C',
    mfgLocation: 'Cadila Pharmaceuticals Ltd, Dholka',
    licenceNo: 'GUJ/DRUGS/G/1090',
    packingDetail1: '10x10\'s Capsules Blister pack',
    packingDetail2: '3x8\'S CAPSULES',
    noOfBatches: 12,
    batchNos: 'EC060E4001 to EC060E4012',
    noOfNonStandardBatches: 'None of the batch has been manufactured with non-standard batch size.',
    noOfBatchesReleased: '12 Batches',
    batchesRejected: 'None of the batch has been rejected during the review period.',

    // Header/Footer Info
    company: 'CADILA PHARMACEUTICALS LIMITED',
    annexure: 'ANNEXURE - I (Ref. SOP No. DQA 011)',
    page: 'Page: 2 of 7',
    formNo: 'FORM NO. FDQA011-01-13',
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '20px auto', 
      padding: '20px',
      border: '1px solid #000',
      position: 'relative',
    },
    // --- HEADER BLOCK STYLES ---
    headerBlock: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '2px solid #000',
      paddingBottom: '5px',
      marginBottom: '10px',
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
      marginBottom: '20px',
      textAlign: 'right',
    },
    // --- TITLE STYLES ---
    pqrTitle: {
      textAlign: 'center',
      fontSize: '16px',
      margin: '20px 0',
      padding: '5px',
    },
    // --- PRODUCT INFO BLOCK ---
    infoBlock: {
      display: 'grid',
      gridTemplateColumns: '150px 10px 1fr',
      gap: '5px',
      fontSize: '12px',
      marginBottom: '20px',
      border: '1px solid #000',
      padding: '10px',
    },
    infoLabel: {
      fontWeight: 'bold',
    },
    infoDelimiter: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    // --- GENERAL INFO TABLE ---
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
      zIndex: 2,
      position: 'relative',
    },
    td: {
      border: '1px solid #000',
      padding: '8px',
      fontSize: '12px',
      verticalAlign: 'top',
    },
    tdLabel: {
      width: '35%',
      fontWeight: 'bold',
      backgroundColor: '#f0f0f0',
      textTransform: 'uppercase',
    },
    tdDelimiter: {
      width: '10px',
      textAlign: 'center',
      fontWeight: 'bold',
      backgroundColor: '#f0f0f0',
    },
    tdData: {
      width: '60%',
    },
    tableHeader: {
        border: '1px solid #000',
        padding: '8px',
        fontSize: '14px',
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#e0e0e0',
    }
  };

  // Helper function to render a table row
  const renderTableRow = (label, data) => (
    <tr>
      <td style={styles.tdLabel}>{label}</td>
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
      <h2 style={styles.pqrTitle}>PRODUCT QUALITY REVIEW (PQR)</h2>

      {/* --- PRODUCT INFORMATION BLOCK (Top Section) --- */}
      <h3 style={{...styles.pqrTitle, border: 'none', margin: '10px 0'}}>PRODUCT INFORMATION</h3>

      <div style={styles.infoBlock}>
        <span style={styles.infoLabel}>Product name</span>
        <span style={styles.infoDelimiter}>:</span>
        <span>{data.productName}</span>

        <span style={styles.infoLabel}>Product code</span>
        <span style={styles.infoDelimiter}>:</span>
        <span>{data.productCode}</span>

        <span style={styles.infoLabel}>Market</span>
        <span style={styles.infoDelimiter}>:</span>
        <span>{data.market}</span>

        <span style={styles.infoLabel}>Review period</span>
        <span style={styles.infoDelimiter}>:</span>
        <span>{data.reviewPeriod}</span>
      </div>

      {/* --- GENERAL INFORMATION TABLE --- */}
      <table style={styles.table}>
        <thead>
            <tr>
                <td colSpan="3" style={styles.tableHeader}>General Information about the product</td>
            </tr>
        </thead>
        <tbody>
          {renderTableRow('Generic Name of Product', data.genericName)}
          {renderTableRow('Description of Product', data.description)}
          {renderTableRow('Label claim', data.labelClaim)}
          {renderTableRow('Shelf Life', data.shelfLife)}
          {renderTableRow('Storage Condition', data.storageCondition)}
          {renderTableRow('Manufacturing location', data.mfgLocation)}
          {renderTableRow('Licence No.', data.licenceNo)}
          {renderTableRow('Packing Detail', data.packingDetail1 + ' / ' + data.packingDetail2)}
          {renderTableRow('No. of batches manufactured', data.noOfBatches)}
          {renderTableRow('Batch Nos.', data.batchNos)}
          {renderTableRow('No. of Batches of non-standard batch sizes', data.noOfNonStandardBatches)}
          {renderTableRow('No. of batches released', data.noOfBatchesReleased)}
          {renderTableRow('No. of batches rejected and reason for rejection', data.batchesRejected)}
        </tbody>
      </table>
    </div>
  );
};

export default ProductInformationForm;