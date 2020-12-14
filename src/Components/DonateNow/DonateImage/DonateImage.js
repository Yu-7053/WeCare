import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DonateMainimage from "../../../Images/DonateNow/Ya.jpeg";

export default function DonateImage() {
  return (
    <div
      style={{
        backgroundImage: `url(${DonateMainimage})`,
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6} style={{ height: 400 }}></Grid>
      </Grid>
    </div>
  );
}
