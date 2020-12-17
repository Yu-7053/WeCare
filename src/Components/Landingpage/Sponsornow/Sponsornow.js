import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Sponsornow.css";
import GirlWithDog from "../../../Images/SponsorNow/girlwithdog.jpg";
import Fab from "@material-ui/core/Fab";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiFab-root": {
      backgroundColor: "rgb(3,90,166)",
      border: "solid",
    },
  },
}));

export default function Sponsornow() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginTop: "100px" }}>
      <Grid container>
        <Grid
          item
          xs={6}
          style={{ backgroundImage: `url(${GirlWithDog})` }}
        ></Grid>
        <Grid
          item
          xs={6}
          style={{ backgroundColor: "rgb(3,90,166)", height: 420 }}
        >
          <h1
            style={{
              color: "White",
              textDecorationLine: "underline",
              marginTop: "50px",
            }}
          >
            Invest in a Child's Future
          </h1>
          <p
            style={{
              fontSize: 20,
              marginLeft: 10,
              marginRight: 10,
              color: "white",
              marginTop: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            When you decide to sponsor a child, you are helping to ensure that
            they grow up healthy, learning and safe- no matter where they were
            born. Many children are not getting the opportunity they need in
            order to reach their full potential. Be a sponsor and you can help
            change that.
          </p>
          <Link
          href="/sponsor-now"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Fab
            variant="extended"
            style={{
              color: "white",
              width: 200,
              fontSize: 20,
              marginTop: "30px",
            }}
          >
            Sponsor Now
          </Fab>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
