import React from "react";
import AboutUsMainImage from "./AboutUsMainImage/AboutUsMainImage";
import AboutUsText from "./AboutUsText/AboutUsText";
import OurVolunteers from "./OurVolunteers/OurVolunteers";
import SolidHeader from "../SolidHeader";

function Homepage() {
  return (
    <>
      <SolidHeader />
      <AboutUsMainImage />
      <AboutUsText />
      <OurVolunteers />
    </>
  );
}

export default Homepage;
