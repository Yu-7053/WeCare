import React from "react";
import Imageslogan from "./Imageslogan/Imageslogan";
import OurMission from "./OurMission/OurMission";
import Sponsornow from "./Sponsornow/Sponsornow";
import OurImpact from "./OurImpact/OurImpact";
import WriteLetter from "./writeLetter/WriteLetter";
import HowHelp from "./HowHelp/HowHelp";
import OurBlog from "./OurBlog/OurBlog";
import Header from "./Header/Header";

function Homepage() {
  return (
    <>
      <Header />
      <Imageslogan />
      <OurMission />
      <Sponsornow />
      <OurImpact />
      <WriteLetter />
      <HowHelp />
      <OurBlog />
    </>
  );
}

export default Homepage;
