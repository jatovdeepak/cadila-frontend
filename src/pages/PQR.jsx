import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";
import Table1 from "./Table1";
import ProductQualityReviewForm from "./ProductQualityReviewForm";
import ProductInformationForm from "./ProductInformationForm";
import PQRReviewContForm from "./PQRReviewContForm";
import PQRReviewContForm2 from "./PQRReviewContForm2";
import PQRReviewContForm3 from "./PQRReviewContForm3";
import PQRReviewContForm4 from "./PQRReviewContForm4";
import PQRReviewContForm5 from "./PQRReviewContForm5";

const PQR = ({ data, loading }) => {
  // Show loader when fetching
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  // Show message if no data
  if (!data) {
    return <Typography>No PQR data available.</Typography>;
  }

  // Handle API error object
  if (data.error) {
    return (
      <Typography color="error" sx={{ mt: 2 }}>
        Error loading PQR: {data.error}
      </Typography>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* <Typography variant="h6" gutterBottom>
        Product Quality Review — {data.name || "Untitled"}
      </Typography> */}

      <ProductQualityReviewForm data={data} />
      <ProductInformationForm data={data} />
      <PQRReviewContForm data={data} />
      <PQRReviewContForm2 data={data} />
      <PQRReviewContForm3 data={data} />
      <PQRReviewContForm4 data={data} />
      <PQRReviewContForm5 data={data} />
      <Table1 data={data} />
    </Box>
  );
};

export default PQR;
