import React from "react";
import DonateImage from "./DonateImage/DonateImage";
import DonatePayment from "./DonatePayment/DonatePayment";
import SolidHeader from "../SolidHeader";

function Homepage() {
  return (
    <>
      <SolidHeader />
      <DonateImage />
      <DonatePayment />
    </>
  );
}

export default Homepage;
