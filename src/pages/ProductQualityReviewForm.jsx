import React from 'react';

const ProductQualityReviewForm = () => {
  // Dummy data based on the PDF content
  const data = {
    productName: 'CLINDAMYCIN CAPSULES 150 MG', 
    strength: '150 MG/CAPSULE', 
    productCode: 'COPY MG/ACH/097/25', 
    mfgLocation: 'EC060 CPL, DHOLKA', 
    market: 'EXPORT (SOMEX PHARMA-UK)', 
    pqrNumber: 'PQR/MPB/CLINDAMYCIN CAPSULES 150', 
    reviewPeriod: '1st JANUARY 2024 to 28th FEBRUARY 2025', 
    preparedBy: {
      designation: 'Technical Supervisor QA', 
      name: 'Thakker Mansi', 
      signature: 'Mansi', 
      date: '32/05/25', 
    },
    reviewedBy: {
      designation: 'Technical Supervisor QA', 
      name: 'Vidi Vaghela', 
      signature: 'au', 
      date: '02/06/25', 
    },
    approvedBy: {
      designation: 'Sr. Indralrakash',  // Simplified based on available text
      name: 'N/A', // Not explicitly named
      signature: 'N/A', // Placeholder
      date: '02/06/25', 
    },
    header: {
      company: 'CADILA PHARMACEUTICALS LIMITED', 
      annexure: 'ANNEXURE - 1 (Ref. SOP No. DQA 011)', 
      page: 'Page: 1 of 7',
      formNo: 'FORM NO. FDQA011-01-13', 
    },
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '20px auto', 
      padding: '20px',
      border: '1px solid #000', // Simulating the document boundary
    },
    // --- HEADER BLOCK STYLES ---
    headerBlock: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '2px solid #000',
      paddingBottom: '5px',
      marginBottom: '10px',
    },
    headerText: {
      lineHeight: '1.2',
      fontSize: '10px',
      fontWeight: 'bold',
      margin: '0',
    },
    headerRightText: {
      textAlign: 'right',
      fontSize: '10px',
      margin: '0',
    },
    formNoBottom: {
      fontSize: '10px',
      marginBottom: '20px',
    },
    // --- TITLE STYLES ---
    pqrTitle: {
      textAlign: 'center',
      fontSize: '16px',
      margin: '20px 0',
      border: '1px solid #000', // Title box
      padding: '5px',
    },
    // --- TABLE STYLES ---
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    td: {
      border: '1px solid #000',
      padding: '8px',
      fontSize: '12px',
    },
    label: {
      width: '30%',
      backgroundColor: '#f0f0f0', // Light shading for labels
      fontWeight: 'bold',
    },
    data: {
      // styles for data cells
    },
    // --- REVIEW PERIOD STYLES ---
    reviewPeriodLabel: {
      marginTop: '20px',
      marginBottom: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
    },
    // --- APPROVAL TABLE STYLES ---
    th: {
      border: '1px solid #000',
      padding: '8px 4px',
      fontSize: '11px',
      textAlign: 'center',
      backgroundColor: '#e0e0e0',
    },
    tdApproval: {
      border: '1px solid #000',
      padding: '8px 4px',
      fontSize: '11px',
      textAlign: 'left',
    },
    labelCol: {
      width: '15%',
      fontWeight: 'bold',
    },
    detailCol: {
      width: '20%',
    },
    signature: {
      textAlign: 'center',
      fontStyle: 'italic', // To suggest a signature area
    },
  };

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
          <p style={styles.headerRightText}>{data.header.annexure}</p>
          <p style={styles.headerRightText}>{data.header.page}</p>
        </div>
      </div>
      <p style={styles.formNoBottom}>{data.header.formNo}</p>

      {/* --- PQR REPORT TITLE --- */}
      <h2 style={styles.pqrTitle}>PRODUCT QUALITY REVIEW (PQR) - REPORT</h2> 

      {/* --- PRODUCT DETAILS TABLE --- */}
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>PRODUCT NAME</td>
            <td style={styles.td}>{data.productName}</td> 
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>STRENGTH</td>
            <td style={styles.td}>{data.strength}</td> 
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>PRODUCT CODE</td>
            <td style={styles.td}>{data.productCode}</td> 
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>MFG LOCATION</td>
            <td style={styles.td}>{data.mfgLocation}</td> 
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>MARKET</td>
            <td style={styles.td}>{data.market}</td> 
          </tr>
          <tr>
            <td style={{ ...styles.td, ...styles.label }}>PQR NUMBER</td>
            <td style={styles.td}>{data.pqrNumber}</td> 
          </tr>
        </tbody>
      </table>

      {/* --- REVIEW PERIOD --- */}
      <p style={styles.reviewPeriodLabel}>
        **REVIEW PERIOD:** {data.reviewPeriod}
      </p> 

      {/* --- APPROVAL SIGNATURES TABLE --- */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.th, ...styles.labelCol }}></th>
            <th style={styles.th}>DESIGNATION</th> 
            <th style={styles.th}>NAME</th>
            <th style={styles.th}>SIGNATURE</th> 
            <th style={styles.th}>DATE</th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...styles.tdApproval, ...styles.labelCol }}>PREPARED BY</td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {data.preparedBy.designation}
            </td> 
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>{data.preparedBy.name}</td> 
            <td style={{ ...styles.tdApproval, ...styles.detailCol, ...styles.signature }}>{data.preparedBy.signature}</td> 
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>{data.preparedBy.date}</td> 
          </tr>
          <tr>
            <td style={{ ...styles.tdApproval, ...styles.labelCol }}>REVIEWED BY</td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {data.reviewedBy.designation}
            </td> 
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>{data.reviewedBy.name}</td> 
            <td style={{ ...styles.tdApproval, ...styles.detailCol, ...styles.signature }}>{data.reviewedBy.signature}</td> 
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>{data.reviewedBy.date}</td> 
          </tr>
          <tr>
            <td style={{ ...styles.tdApproval, ...styles.labelCol }}>APPROVED BY</td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>
              {data.approvedBy.designation}
            </td> 
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>{data.approvedBy.name}</td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol, ...styles.signature }}>{data.approvedBy.signature}</td>
            <td style={{ ...styles.tdApproval, ...styles.detailCol }}>{data.approvedBy.date}</td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductQualityReviewForm;