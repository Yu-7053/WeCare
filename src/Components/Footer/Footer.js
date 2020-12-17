import React from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <Paper style={{ height: "auto", width: "auto", marginTop: "100px" }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: 240, backgroundColor: "#F8F6F6" }}
      >
        <Grid item xs={4}>
          <h3>Learn More</h3>
          <div>
            <span>About Us</span>
            <br></br>
            <span>Donate</span>
            <br></br>
            <span>Sponsor a Child</span>
            <br></br>
            <span>Blog</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <h3>Contact</h3>

          <span>
            Grapherstraße 77<br></br>67343
          </span>
          <br></br>
          <span>1-800-888-3089</span>
          <br></br>
          <span>wecare@gmail.com</span>
        </Grid>
        <Grid item xs={4}>
          <h3>Connect with Us</h3>
          <FacebookIcon style={{ height: "40px", width: "40px" }} />

          <InstagramIcon style={{ height: "40px", width: "40px" }} />
          <TwitterIcon style={{ height: "40px", width: "40px" }} />
        </Grid>

        <p className="col-sm" style={{ marginRight: "90%" }}>
          &copy;Copyright {new Date().getFullYear()}
        </p>
      </Grid>
    </Paper>
  );
}

export default Footer;
