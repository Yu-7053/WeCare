import React from "react";
import Grid from "@material-ui/core/Grid";
import OurMissionIcon from "../../../Images/OurMission/missionlogo.png";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 3,
      marginLeft: 150,
    }}
  />
);
export default function OurMission() {
  return (
    <div>
      <Grid xs={12} style={{marginLeft:80, marginRight:80}}>
        <br></br>
        <br></br>
        <img src={OurMissionIcon} style={{ height: 100, width: 100 }}></img>
        <p
          style={{
            fontWeight: "bold",
            fontSize: 35,
            marginTop: 0,
            textDecorationLine: "underline",
            textDecorationColor: "#035AA6",
          }}
        >
          Our Mission
        </p>
        <span style={{ fontSize: 28, color: "#696161", fontStyle:"italic" }}>
          We connect with the people around the world in the fight to end
          poverty. Working together, we invest in the lives of children,
          building healthy environments they need to thrive, and empower them to
          create lasting change in their own lives and communities.
        </span>
      </Grid>
    </div>
  );
}
