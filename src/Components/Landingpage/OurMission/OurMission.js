import React from "react";
import Grid from "@material-ui/core/Grid";
import OurMissionIcon from "../../../Images/OurMission/missionlogo.png";

export default function OurMission() {
  return (
    <div>
      <Grid xs={12} style={{ marginLeft: 80, marginRight: 80 }}>
        <br></br>
        <br></br>
        <img src={OurMissionIcon} style={{ height: "90px", width: "90px" }} />
        <p
          style={{
            fontWeight: "bold",
            fontSize: 28,
            marginTop: 0,
            textDecorationLine: "underline",
            textDecorationColor: "#035AA6",
          }}
        >
          Our Mission
        </p>
        <span
          style={{
            fontSize: 20,
            color: "#696161",
            fontStyle: "italic",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          We connect with the people around the world in the fight to end
          poverty. Working together, we invest in the lives of children,
          building healthy environments they need to thrive, and empower them to
          create lasting change in their own lives and communities.
        </span>
      </Grid>
    </div>
  );
}
