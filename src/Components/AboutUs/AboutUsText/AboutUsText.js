import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import WhoWeAre from "../../../Images/AboutUs/WhoWeAre.jpeg"
import OurValues from "../../../Images/AboutUs/OurValues.jpeg"
import WhereWeWork from "../../../Images/AboutUs/WhereWeWork.jpeg"


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
 
    },
    media: {
      height: 140,
    },
  });
  

export default function AboutUsText() {

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
          About Us
        </h1>

        <br></br>
        <span style={{ fontSize: 25 }}>
        For the past 20 years we have been giving the children in the United States and other parts of the world 
        opportunities to learn, access to healthcare, protection from harm and a healthy start to their lives. 
          
        </span>
      </Grid>
      <Grid container style={{marginTop:"3%", marginLeft:"3%"}}>

        <Grid item xs={3} style={{backgroundImage:`url(${WhoWeAre})`, marginLeft:"5%",height:400}}>
        <Paper style={{backgroundColor:"#04ADBF", marginTop:"90%", height:"20%", alignContent:"center"}}>
            <span style={{fontWeight:"bold", color:"white",fontSize:30}}>Who We Are</span>
        </Paper>
        </Grid>
        <Grid item xs={3} style={{backgroundImage:`url(${OurValues})`, marginLeft:"5%",height:400}}>
        <Paper style={{backgroundColor:"#04ADBF", marginTop:"90%", height:"20%", alignContent:"center"}}>
            <span style={{fontWeight:"bold", color:"white",fontSize:30}}>Our Values</span>
        </Paper>
        </Grid>
        <Grid item xs={3} style={{backgroundImage:`url(${WhereWeWork})`, marginLeft:"5%",height:400}}>
        <Paper style={{backgroundColor:"#04ADBF", marginTop:"90%", height:"20%", alignContent:"center"}}>
            <span style={{fontWeight:"bold", color:"white",fontSize:30}}>Where We Work</span>
        </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
