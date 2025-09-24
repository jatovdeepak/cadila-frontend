// src/components/DynamicChart.jsx
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Typography, Box } from "@mui/material";

// helper: safely extract nested values
const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
};

const DynamicChart = ({ data, dataKey, label, color = "#1976d2" }) => {
  if (!data || !dataKey) return null;

  // transform dataset
  const processed = data.map((row) => {
    let raw = getNestedValue(row, dataKey);

    if (raw === "ND" || raw === undefined) raw = null;

    // special case: particle size (extract numeric avg µm)
    if (dataKey === "particleSize" && raw) {
      const match = raw.match(/([\d.]+)\s*µm/);
      raw = match ? parseFloat(match[1]) : null;
    }

    return {
      ...row,
      [dataKey]:
        raw !== null ? parseFloat(String(raw).replace(/[^0-9.-]/g, "")) : null,
    };
  });

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Comparison of AR Number with {label}
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={processed}
          margin={{ top: 20, right: 30, left: 70, bottom: 50 }} // extra left margin for label
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="arNo" angle={-30} textAnchor="end" height={80} />
          <YAxis
            label={{
              value: label,
              angle: -90,
              position: "outsideLeft",
              dx: -20, // shift further left
            }}
            domain={[
              (dataMin) => Math.floor(dataMin * 0.9), // 10% space below min
              (dataMax) => Math.ceil(dataMax * 1.1), // 10% space above max
            ]}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            activeDot={{ r: 8 }}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default DynamicChart;
