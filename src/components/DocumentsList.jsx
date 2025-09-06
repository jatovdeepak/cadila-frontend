function DocumentsList({ documents }) {
    if (!documents.length) {
      return <p>No documents yet.</p>;
    }
  
    return (
      <div>
        <h3>Extracted Data:</h3>
        {documents.map((doc, i) => (
          <pre
            key={i}
            style={{
              background: "#f4f4f4",
              padding: "1rem",
              borderRadius: "5px",
              marginBottom: "1rem",
              overflowX: "auto",
            }}
          >
            {JSON.stringify(doc, null, 2)}
          </pre>
        ))}
      </div>
    );
  }
  
  export default DocumentsList;
  