import React from "react";
import Grid from "@material-ui/core/Grid";
import OurMissionIcon from "../../../Images/OurMission/missionlogo.png";

export default function SponsorText() {
  return (
    <div>
      <Grid xs={12} style={{ marginLeft: 80, marginRight: 80 }}>
        <br></br>
        <br></br>

        <h1
          style={{
            fontWeight: "bold",
            fontSize: 28,
            marginTop: 0,
            color: "black",
          }}
        >
          Meet children waiting for a sponsor
        </h1>
        <p style={{ fontsize: 25 }}>
          <i>How to</i> SPONSOR A CHILD IN NEED
        </p>

        <br></br>
        <span style={{ fontSize: 20 }}>
          In the times of crisis, children suffering from poverty are the ones
          most affected and face uncertain futures. Your monthly gift of 25€
          will help your sponsored child in gaining access to benefits like
          healthcare, life skills, education and job training before graduation.
          As a sponsor you will see your impact on the child through letters and
          photos from your child. You will know how you have helped the child
          when they need it the most.
          <br></br>
          Questions?
          <span style={{ color: "#035AA6" }}>
            Call 1-800-888-3089, chat or send an email.
          </span>
          Our team is ready to help.
        </span>
      </Grid>
    </div>
  );
}
