import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@mui/material";
import ARpHChart from "../components/ARpHChart";
import AROpticalRotationChart from "../components/AROpticalRotationChart";
import DynamicChart from "../components/DynamicChart";


const Table1 = () => {
  const tableData = [
    {
      srNo: 1,
      batchNo: "RM/73K/2303620",
      manufacturer: "ZHEJIANG TIANTAI PHARMACEUTICAL CO",
      arNo: "ECIMEN 13000054002",
      appearance:
        "White or almost white, crystalline powder, slightly hygroscopic",
      solubility: "Complies",
      identification: {
        ir: "Positive",
        thinLayer: "Positive",
        chemicalReaction: "Positive",
        chlorides: "Positive",
      },
      pH: "4.10",
      specificOpticalRotation: "+135",
      relatedSubstances: {
        impurityA: "0.24",
        impurityB: "0.07",
        impurityC: "0.12",
        rrt036: "0.36",
        rrt071: "ND",
        rrt087: "ND",
        anyOther: "ND",
        total: "0.50",
      },
      water: "1.80",
      sulfatedAsh: "0.05",
      assay: "98.5",
      residualSolvents: {
        acetone: "ND",
        ethanol: "0.02",
        chloroform: "ND",
      },
      particleSize: "Passes (2.14 µm avg.)",
      microbial: {
        enumeration: "NMT 1000 cfu/g",
        specified: "Absent",
      },
    },
    {
      srNo: 2,
      batchNo: "RM/DHLK/2400802",
      manufacturer: "ZHEJIANG TIANTAI PHARMACEUTICAL CO",
      arNo: "ECIMEN 13000054003",
      appearance: "White crystalline powder",
      solubility: "Complies",
      identification: {
        ir: "Positive",
        thinLayer: "NA",
        chemicalReaction: "NA",
        chlorides: "Positive",
      },
      pH: "4.30",
      specificOpticalRotation: "140.40",
      relatedSubstances: {
        impurityA: "0.30",
        impurityB: "0.05",
        impurityC: "ND",
        rrt036: "0.30",
        rrt071: "ND",
        rrt087: "ND",
        anyOther: "ND",
        total: "0.65",
      },
      water: "1.70",
      sulfatedAsh: "0.06",
      assay: "99.0",
      residualSolvents: {
        acetone: "0.01",
        ethanol: "0.04",
        chloroform: "ND",
      },
      particleSize: "Passes (2.04 µm avg.)",
      microbial: {
        enumeration: "NMT 1000 cfu/g",
        specified: "Absent",
      },
    },
    {
      srNo: 3,
      batchNo: "RM/DHLK/2400892",
      manufacturer: "ZHEJIANG TIANTAI PHARMACEUTICAL CO",
      arNo: "ECIMEN 13000054004",
      appearance: "White crystalline powder",
      solubility: "Complies",
      identification: {
        ir: "Positive",
        thinLayer: "NA",
        chemicalReaction: "NA",
        chlorides: "Positive",
      },
      pH: "4.20",
      specificOpticalRotation: "142.00",
      relatedSubstances: {
        impurityA: "0.40",
        impurityB: "0.10",
        impurityC: "ND",
        rrt036: "0.40",
        rrt071: "0.05",
        rrt087: "ND",
        anyOther: "ND",
        total: "0.70",
      },
      water: "1.60",
      sulfatedAsh: "0.07",
      assay: "99.2",
      residualSolvents: {
        acetone: "ND",
        ethanol: "0.03",
        chloroform: "ND",
      },
      particleSize: "Passes (2.14 µm avg.)",
      microbial: {
        enumeration: "NMT 1000 cfu/g",
        specified: "Absent",
      },
    },
  ];

  // State for search + pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  // dropdown state
  const [selectedMetric, setSelectedMetric] = useState("pH");

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter data by search (checks batchNo, manufacturer, AR No.)
  const filteredData = tableData.filter(
    (row) =>
      row.batchNo.toLowerCase().includes(search.toLowerCase()) ||
      row.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
      row.arNo.toLowerCase().includes(search.toLowerCase())
  );

  // Prepare chart data
//   const chartData = filteredData.map((row) => ({
//     arNo: row.arNo,
//     pH: parseFloat(row.pH),
//     specificOpticalRotation: parseFloat(row.specificOpticalRotation),
//   }));

  // chart options
  const chartOptions = [
    { key: "pH", label: "pH", color: "#1976d2" },
    { key: "specificOpticalRotation", label: "Specific Optical Rotation", color: "#388e3c" },
    { key: "relatedSubstances.impurityA", label: "Impurity A", color: "#d32f2f" },
    { key: "relatedSubstances.impurityB", label: "Impurity B", color: "#f57c00" },
    { key: "relatedSubstances.impurityC", label: "Impurity C", color: "#7b1fa2" },
    { key: "relatedSubstances.total", label: "Total Impurities", color: "#455a64" },
    { key: "water", label: "Water", color: "#0288d1" },
    { key: "sulfatedAsh", label: "Sulfated Ash", color: "#8d6e63" },
    { key: "assay", label: "Assay", color: "#2e7d32" },
    { key: "residualSolvents.acetone", label: "Acetone", color: "#c2185b" },
    { key: "particleSize", label: "Particle Size (µm avg.)", color: "#512da8" },
  ];

  const selectedChart = chartOptions.find((opt) => opt.key === selectedMetric);


  return (
    <>
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" align="center" gutterBottom>
        PRODUCT QUALITY REVIEW OF CLINDAMYCIN CAPSULES 150 mg
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        PERIOD: 1 JANUARY 2024 to 28 FEBRUARY 2025
      </Typography>

      {/* Search */}
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                Sr No.
              </TableCell>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                Batch No.
              </TableCell>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                Manufacturer
              </TableCell>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                AR No.
              </TableCell>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                Appearance
              </TableCell>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                Solubility
              </TableCell>
              <TableCell colSpan={4} align="center" sx={{ fontWeight: "bold" }}>
                Identification
              </TableCell>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                pH
              </TableCell>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                Specific Optical Rotation
              </TableCell>
              <TableCell colSpan={8} align="center" sx={{ fontWeight: "bold" }}>
                Related Substances (%)
              </TableCell>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                Water
              </TableCell>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                Sulfated ash
              </TableCell>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                Assay
              </TableCell>
              <TableCell colSpan={3} align="center" sx={{ fontWeight: "bold" }}>
                Residual solvents
              </TableCell>
              <TableCell rowSpan={2} sx={{ fontWeight: "bold" }}>
                Particle Size
              </TableCell>
              <TableCell colSpan={2} align="center" sx={{ fontWeight: "bold" }}>
                Microbial tests
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>IR</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>TLC</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Chemical</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Chlorides</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Impurity A</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Impurity B</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Impurity C</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>RRT 0.36</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>RRT 0.71</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>RRT 0.87</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Any other</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Acetone</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Ethanol</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Chloroform</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Enumeration</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Specified</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow key={i} hover>
                  <TableCell>{row.srNo}</TableCell>
                  <TableCell>{row.batchNo}</TableCell>
                  <TableCell>{row.manufacturer}</TableCell>
                  <TableCell>{row.arNo}</TableCell>
                  <TableCell>{row.appearance}</TableCell>
                  <TableCell>{row.solubility}</TableCell>
                  <TableCell>{row.identification.ir}</TableCell>
                  <TableCell>{row.identification.thinLayer}</TableCell>
                  <TableCell>{row.identification.chemicalReaction}</TableCell>
                  <TableCell>{row.identification.chlorides}</TableCell>
                  <TableCell>{row.pH}</TableCell>
                  <TableCell>{row.specificOpticalRotation}</TableCell>
                  <TableCell>{row.relatedSubstances.impurityA}</TableCell>
                  <TableCell>{row.relatedSubstances.impurityB}</TableCell>
                  <TableCell>{row.relatedSubstances.impurityC}</TableCell>
                  <TableCell>{row.relatedSubstances.rrt036}</TableCell>
                  <TableCell>{row.relatedSubstances.rrt071}</TableCell>
                  <TableCell>{row.relatedSubstances.rrt087}</TableCell>
                  <TableCell>{row.relatedSubstances.anyOther}</TableCell>
                  <TableCell>{row.relatedSubstances.total}</TableCell>
                  <TableCell>{row.water}</TableCell>
                  <TableCell>{row.sulfatedAsh}</TableCell>
                  <TableCell>{row.assay}</TableCell>
                  <TableCell>{row.residualSolvents.acetone}</TableCell>
                  <TableCell>{row.residualSolvents.ethanol}</TableCell>
                  <TableCell>{row.residualSolvents.chloroform}</TableCell>
                  <TableCell>{row.particleSize}</TableCell>
                  <TableCell>{row.microbial.enumeration}</TableCell>
                  <TableCell>{row.microbial.specified}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Paper>
    {/* <div style={{ height: "800px", width: "800px", margin: "0 100px" }}>
      <ARpHChart data={chartData} /> 
      <AROpticalRotationChart data={chartData} />
    </div> */}
    {/* Charts */}
    {/* <div style={{ height: "800px", width: "800px", margin: "0 100px" }}>
        <DynamicChart data={filteredData} dataKey="pH" label="pH" color="#1976d2" />
        <DynamicChart
          data={filteredData}
          dataKey="specificOpticalRotation"
          label="Specific Optical Rotation"
          color="#388e3c"
        />
        <DynamicChart
          data={filteredData}
          dataKey="relatedSubstances.impurityA"
          label="Impurity A"
          color="#d32f2f"
        />
        <DynamicChart
          data={filteredData}
          dataKey="relatedSubstances.impurityB"
          label="Impurity B"
          color="#f57c00"
        />
        <DynamicChart
          data={filteredData}
          dataKey="relatedSubstances.impurityC"
          label="Impurity C"
          color="#7b1fa2"
        />
        <DynamicChart
          data={filteredData}
          dataKey="relatedSubstances.total"
          label="Total Impurities"
          color="#455a64"
        />
        <DynamicChart
          data={filteredData}
          dataKey="water"
          label="Water"
          color="#0288d1"
        />
        <DynamicChart
          data={filteredData}
          dataKey="sulfatedAsh"
          label="Sulfated Ash"
          color="#8d6e63"
        />
        <DynamicChart
          data={filteredData}
          dataKey="assay"
          label="Assay"
          color="#2e7d32"
        />
        <DynamicChart
          data={filteredData}
          dataKey="residualSolvents.acetone"
          label="Acetone"
          color="#c2185b"
        />
        <DynamicChart
          data={filteredData}
          dataKey="particleSize"
          label="Particle Size (µm avg.)"
          color="#512da8"
        />
      </div> */}



       {/* Dropdown + Chart */}
       <Box sx={{ mt: 4, width: "400px", mx: "330px" }}>
        <FormControl fullWidth>
          <InputLabel>Select Metric</InputLabel>
          <Select
            value={selectedMetric}
            label="Select Metric"
            onChange={(e) => setSelectedMetric(e.target.value)}
          >
            {chartOptions.map((opt) => (
              <MenuItem key={opt.key} value={opt.key}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Render selected chart */}
      <div style={{ height: "800px", width: "800px", margin: "30px 100px" }}>
        {selectedChart && (
          <DynamicChart
            data={filteredData}
            dataKey={selectedChart.key}
            label={selectedChart.label}
            color={selectedChart.color}
          />
        )}
      </div>
    </>
  );
};

export default Table1;
