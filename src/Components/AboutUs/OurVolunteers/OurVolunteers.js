import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import GreenVolunteer from "../../../Images/AboutUs/GreenVolunteer.jpg"
import HappyVolunteer from "../../../Images/AboutUs/HappyVolunteer.jpg"
import WhiteVolunteer from "../../../Images/AboutUs/WhiteVolunteer.jpg"
import FullOfKids from "../../../Images/AboutUs/FullOfKids.png"


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
 
    },
    media: {
      height: 140,
    },
  });
  

export default function OurVolunteers() {

    const classes = useStyles();

  return (
    <div>
      <Grid xs={12} style={{ marginLeft: 80, marginRight: 80 }}>
        <br></br>
        <br></br>

        <h1
          style={{
            fontWeight: "bold",
            fontSize: 35,
            marginTop: 0,
            color: "black",
          }}
        >
          Our Volunteers
        </h1>

      </Grid>
      <Grid container style={{marginTop:"3%", marginLeft:"3%"}}>

        <Grid item xs={3} style={{backgroundImage:`url(${GreenVolunteer})`, marginLeft:"5%",height:400}}>
        <Paper style={{backgroundColor:"#04ADBF", marginTop:"90%", height:"20%", alignContent:"center"}}>
            <span style={{fontWeight:"bold", color:"white",fontSize:30}}>Adrien Rinaldi</span>
        </Paper>
        </Grid>
        <Grid item xs={3} style={{backgroundImage:`url(${HappyVolunteer})`, marginLeft:"5%",height:400}}>
        <Paper style={{backgroundColor:"#04ADBF", marginTop:"90%", height:"20%", alignContent:"center"}}>
            <span style={{fontWeight:"bold", color:"white",fontSize:30}}>Rachel Smith</span>
        </Paper>
        </Grid>
        <Grid item xs={3} style={{backgroundImage:`url(${WhiteVolunteer})`, marginLeft:"5%",height:400}}>
        <Paper style={{backgroundColor:"#04ADBF", marginTop:"90%", height:"20%", alignContent:"center"}}>
            <span style={{fontWeight:"bold", color:"white",fontSize:30}}>Juan Beresh</span>
        </Paper>
        </Grid>
        
      </Grid>

      <Grid item xs={12} style={{backgroundImage:`url(${FullOfKids})`, backgroundColor:"Black", height:100,marginTop:"30%",marginBottom:"10%"}}>
      </Grid>

    </div>
  );
}
