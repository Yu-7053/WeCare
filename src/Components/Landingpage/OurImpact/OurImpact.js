import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import childOnHand from "../../../Images/OurImpact/childOnHand.png";
import shackingHand from "../../../Images/OurImpact/shackingHand.png";
import graduate from "../../../Images/OurImpact/Graduate.png";

const useStyles = makeStyles((theme) => ({
  p: {
    margin: 0,
    padding: 0,
  },

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function OurImpact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: 28,
              marginTop: 50,
              textDecorationLine: "underline",
              textDecorationColor: "#035AA6",
            }}
          >
            Our Impact
          </p>
        </Grid>
        <Grid item xs={4}>
          <img src={childOnHand} style={{ height: 200, width: 200 }}></img>
          <h2>20000+</h2>
          <div style={{ fontSize: 20 }}>Sponsored children</div>
        </Grid>
        <Grid item xs={4}>
          <img src={shackingHand} style={{ height: 195, width: 200 }}></img>
          <h2>20+</h2>
          <div style={{ fontSize: 20 }}>Local Partners</div>
        </Grid>
        <Grid item xs={4}>
          <img src={graduate} style={{ height: 195, width: 200 }}></img>
          <h2>30000+</h2>
          <div style={{ fontSize: 20 }}>Children educated</div>
        </Grid>
      </Grid>
    </div>
  );
}
