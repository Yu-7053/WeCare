import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SponsorMainimage from "../../../Images/SponsorImages/SponsorMainimage.jpeg";

export default function CenteredGrid() {
  return (
    <div
      style={{
        backgroundImage: `url(${SponsorMainimage})`,
        height: "100%",
        width: "auto",
        textAlign: "center",
        opacity: 0.8,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6} style={{ height: 400 }}>
          <h1
            style={{
              marginRight: "30%",
              marginTop: 200,
              color: "white",
              fontSize: 45,
            }}
          >
            SPONSOR A CHILD
          </h1>
        </Grid>
      </Grid>
    </div>
  );
}
