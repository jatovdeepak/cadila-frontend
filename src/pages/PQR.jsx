import React from "react";
import Table1 from "./Table1";
// import PqrForm from "./PqrForm";
import ProductQualityReviewForm from "./ProductQualityReviewForm";
import ProductInformationForm from "./ProductInformationForm";
import PQRReviewContForm from "./PQRReviewContForm";
import PQRReviewContForm2 from "./PQRReviewContForm2";
import PQRReviewContForm3 from "./PQRReviewContForm3";
import PQRReviewContForm4 from "./PQRReviewContForm4";
import PQRReviewContForm5 from "./PQRReviewContForm5";

const PQR = () => {
  return (
    <>
      <div>
        <ProductQualityReviewForm />
      </div>
      <div>
        <ProductInformationForm />
      </div>
      <div>
        <PQRReviewContForm />
      </div>
      <div>
        <PQRReviewContForm2 />
      </div>
      <div>
        <PQRReviewContForm3 />
      </div>
      <div>
        <PQRReviewContForm4 />
      </div>
      <div>
        <PQRReviewContForm5 />
      </div>
      <div>
        <Table1 />
      </div>
    </>
  );
};

export default PQR;
