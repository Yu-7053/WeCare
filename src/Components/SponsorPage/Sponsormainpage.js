import React, { useEffect } from "react";
import SponsorHeaderImage from "./SponsorHeaderImage/SponsorHeaderImage";
import SponsorText from "./SponsorText/SponsorText";
import SponsorCards from "./SponsorCards/SponsorCarrdsNew";
import SolidHeader from "../SolidHeader";

export const Sponsormainpage = () => {
  return (
    <>
      <SolidHeader />
      <SponsorHeaderImage />
      <SponsorText />
      <SponsorCards />
    </>
  );
};
export default Sponsormainpage;
