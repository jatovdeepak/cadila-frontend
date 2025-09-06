// src/components/DataDisplay.js
import React from 'react';
import './DataDisplay.css'; // Import the CSS file for styling

/**
 * A recursive component to dynamically render JSON data.
 * It intelligently decides to show data as key-value pairs or as a table.
 * @param {object} data The JSON object to display.
 */
const DataDisplay = ({ data }) => {
  if (!data) {
    return null;
  }

  // Helper function to capitalize the first letter of each word in a string
  const formatKey = (key) => {
    return key
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const renderContent = (content) => {
    // If the content is an array of objects, render a table
    if (Array.isArray(content) && content.length > 0 && typeof content[0] === 'object' && content[0] !== null) {
      const headers = Object.keys(content[0]);
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
            {content.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{String(row[header])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    // If the content is an array but not an array of objects, or it's just a string, render it as-is
    return <span className="value">{String(content)}</span>;
  };

  // Render the main data container
  return (
    <div className="data-container">
      {Object.entries(data).map(([key, value]) => {
        // Skip rendering if the value is an empty array or an empty string
        if ((Array.isArray(value) && value.length === 0) || value === '') {
          return null;
        }

        // If the value is a non-empty array, render a table section
        if (Array.isArray(value)) {
          return (
            <div key={key} className="data-section">
              <h3 className="section-heading">{formatKey(key)}</h3>
              {renderContent(value)}
            </div>
          );
        }

        // If the value is an object (which might contain nested key-value pairs or arrays)
        if (typeof value === 'object' && value !== null) {
          return (
            <div key={key} className="data-subsection">
              <h4 className="subsection-heading">{formatKey(key)}</h4>
              {/* Recursively call DataDisplay for nested objects */}
              <DataDisplay data={value} />
            </div>
          );
        }
        
        // Default case: render a key-value pair
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