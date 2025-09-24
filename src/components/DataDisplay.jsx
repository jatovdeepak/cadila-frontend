import React from 'react';
import './DataDisplay.css';

const DataDisplay = ({ data }) => {
  if (!data) return null;

  // Capitalize words in keys
  const formatKey = (key) =>
    key
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

  // 🔑 Utility: recursively check if a value (array/object/string) is "empty"
  const isEmptyValue = (val) => {
    if (val === '' || val === null || val === undefined) return true;

    if (Array.isArray(val)) {
      return val.length === 0 || val.every(isEmptyValue);
    }

    if (typeof val === 'object') {
      return (
        Object.keys(val).length === 0 ||
        Object.values(val).every(isEmptyValue)
      );
    }

    return false;
  };

  const renderContent = (content) => {
    // If it's an array of objects
    if (
      Array.isArray(content) &&
      content.length > 0 &&
      typeof content[0] === 'object' &&
      content[0] !== null
    ) {
      const headers = Object.keys(content[0]);

      // Filter out rows that are completely empty
      const nonEmptyRows = content.filter((row) =>
        headers.some((header) => !isEmptyValue(row[header]))
      );

      if (nonEmptyRows.length === 0) return null;

      return (
        <table className="data-table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{formatKey(header)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {nonEmptyRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{String(row[header] ?? '')}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    // If it's an array of values
    if (Array.isArray(content)) {
      const nonEmptyValues = content.filter((val) => !isEmptyValue(val));
      if (nonEmptyValues.length === 0) return null;
      return <span className="value">{nonEmptyValues.join(', ')}</span>;
    }

    // If it's a nested object (like COLUMN1, COLUMN2...)
    if (typeof content === 'object' && content !== null) {
      if (isEmptyValue(content)) return null; // ✅ skip objects with only empty fields
      return <DataDisplay data={content} />;
    }

    // Default: render simple value
    return <span className="value">{String(content)}</span>;
  };

  return (
    <div className="data-container">
      {Object.entries(data).map(([key, value]) => {
        // Skip if this section/subsection is fully empty
        if (isEmptyValue(value)) return null;

        if (Array.isArray(value)) {
          return (
            <div key={key} className="data-section">
              <h3 className="section-heading">{formatKey(key)}</h3>
              {renderContent(value)}
            </div>
          );
        }

        if (typeof value === 'object' && value !== null) {
          return (
            <div key={key} className="data-subsection">
              <h4 className="subsection-heading">{formatKey(key)}</h4>
              {renderContent(value)}
            </div>
          );
        }

        return (
          <div key={key} className="data-item">
            <span className="key">{formatKey(key)}:</span>
            <span className="value">{String(value)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DataDisplay;
