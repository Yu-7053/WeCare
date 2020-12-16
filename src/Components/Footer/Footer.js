import React from "react";
import "./Footer.css";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function Footer() {
  return (
    <Paper style={{height:"auto", width:"auto"}}>
        <Grid container direction="row"
        justify="center"
        alignItems="center" style={{height:500 }}>
        
          <Grid item xs={4}>
            <h2 style ={{textDecorationLine:"underline"}}>Learn More</h2>
            <span>About Us</span>
            <br></br>
            <span>Donate</span>
            <br></br>
            <span>Sponsor a Child</span>
            <br></br>
            <span>Blog</span>

          </Grid>
          <Grid item xs={4}>
          <h2 style ={{textDecorationLine:"underline"}}>Contact</h2>
            <span>Contact</span>
            <br></br>
            <span>Address</span>
            <br></br>
            <span>Phone</span>
            <br></br>
            <span>Email</span>
          </Grid>
          <Grid item xs={4}>
          <h2 style ={{textDecorationLine:"underline"}}>Connect With Us</h2>
            <span>Contact</span>
            <br></br>
            <span>Address</span>
            <br></br>
            <span>Phone</span>
            <br></br>
            <span>Email</span>
          </Grid>
          
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </Grid>
        </Paper>
         
        
  
  );
}

export default Footer;