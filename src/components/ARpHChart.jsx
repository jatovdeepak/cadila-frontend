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
  BarChart,
  Bar,
} from "recharts";
import { Typography, Box } from "@mui/material";

const ARpHChart = ({ data }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Comparison of AR Number with pH
      </Typography>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="arNo" angle={-30} textAnchor="end" height={80} />
          <YAxis label={{ value: "pH", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pH"
            stroke="#1976d2"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Bar Chart */}
      {/* <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="arNo" angle={-30} textAnchor="end" height={80} />
          <YAxis label={{ value: "pH", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="pH" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer> */}
    </Box>
  );
};

export default ARpHChart;
