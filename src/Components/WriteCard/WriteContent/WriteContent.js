import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab"

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
      "& .MuiButton-containedPrimary": {
        backgroundColor: "rgb(3, 90, 166)",
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 400,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
    },
  }));
  


function WriteContent() {
  
    
const classes = useStyles();
  const [type, setType] = React.useState(0);
  const [price, setPrice] = React.useState("");

  const handleChange = (event, newValue) => {
    setType(newValue);
  };

  const handlepriceChange = (event) => {
    setPrice(event.target.value);
  };
  return (
      
    <div className={classes.root} style={{ marginTop: "5%" }}>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: 800 }}
      >
        <Paper style={{ height: 800, width: "70%" }}>
          
          
          <br></br> <br></br>
          <span
            style={{
              fontSize: 28,
              textDecorationLine: "underline",

              marginRight: "70%",
            }}
          >
            Your Information
          </span>
          <form>
            <Grid container>
              <Grid item xs={3} style={{ marginTop: "9%" }}>
                <span style={{ fontSize: 20 }}> Kid's Name</span>
              </Grid>
              <Grid item xs={9} style={{ marginTop: "8%" }}>
                <TextField
                  style={{ marginRight: 2, width: 420 }}
                  id="outlined-basic"
                  label="Kid's Name"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3} style={{ marginTop: "5%" }}>
                <span style={{ fontSize: 20 }}> Kid's ID</span>
              </Grid>
              <Grid item xs={9} style={{ marginTop: "3%" }}>
                <TextField
                  style={{ marginRight: 2, width: 420 }}
                  id="outlined-basic"
                  label="Kid's ID"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3} style={{ marginTop: "5%" }}>
                <span style={{ fontSize: 20 }}> From</span>
              </Grid>
              <Grid item xs={9} style={{ marginTop: "3%" }}>
                <TextField
                  style={{ marginRight: 2, width: 420 }}
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} style={{ marginTop: "5%" }}>
                <span style={{ fontSize: 20 }}> My Letter</span>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "3%" }}>
              <textarea style={{ minWidth:800, minHeight:200   ,marginRight: 2, width:800, height:200,maxWidth: 800, maxHeight:200 }}></textarea>

              </Grid>
            </Grid>
        
            
           </form>
                <Fab variant="extended" color="primary" style={{marginTop:"2%"}}>Submit</Fab>
           </Paper>
      </Grid>
    </div>
  );
}

export default WriteContent;