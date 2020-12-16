import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
//import SloganImage from "../../../Images/children-306607_1280.jpg";
import SloganImage from "../../../Images/LandingPageImage.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "&  .MuiFab-root": {
      fontColor: "White",
      fontWeight: "bolder",
      backgroundColor: "rgb(3,90,166)",
      width: 300,
      border: "solid 2px",
      fontSize: "20px",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Imageslogan() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${SloganImage})`,
        height: "785px",
        width: "auto",
        textAlign: "center",
        opacity: 0.8,
      }}
    >
      <Grid
        sm={6}
        textAlign="center"
        style={{
          fontSize: 60,
          marginLeft: 750,
          height: "40%",
        }}
      />

      <Grid
        sm={6}
        textAlign="center"
        className="slogan"
        style={{
          fontSize: 60,
          marginLeft: 850,
          height: "10%",
          fontWeight: "bold",
          color: "rgb(248,244,244)",
          fontStyle: "italic",
        }}
      >
        "Every childhood is worth fighting for"
        <Fab variant="extended" style={{ marginLeft: "10%", color: "White" }}>
          Donate Now
        </Fab>
      </Grid>
    </div>
  );
}
