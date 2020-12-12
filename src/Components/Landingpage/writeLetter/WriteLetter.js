import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Yaaaaa from "../../../Images/WriteLetter/Yaaaaa.jpeg"
import Fab from '@material-ui/core/Fab'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';


 
const useStyles = makeStyles((theme) => ({
 root: {
 flexGrow: 1,
 "& .MuiFab-root": { 
  backgroundColor: "#04ADBF",
  border : "solid"
}
 },
 modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
paper: {
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
},
}));
 
export default function WriteLetter() {
 const classes = useStyles();
 const [open, setOpen] = React.useState(false);

 const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
 
 return (
 <div className={classes.root} style={{marginTop: "50px", fontFamily:"Playfair Display"}}>
 <Grid container>
 <Grid item xs={6} style={{backgroundColor:"#04ADBF", height:420}} >
  <h1 style={{color:"White",textDecorationLine: "underline", marginTop:90}}>Build a Relationship</h1>
  <p style={{fontSize:25, marginLeft:10, marginRight:10, color:"white"}}>
  Keep in touch with your sponsored child and see their progress connecting with them 
through letters.
   </p>
   <Fab variant="extended" style={{color:"white", width:350, fontSize:20}} onClick={handleOpen}>
            Write a Letter
   </Fab>

   <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p id="transition-modal-description">This fuction is only for those who have sponsored the child</p>
            <Button style={{marginLeft:150, color:"gray"}} onClick={handleClose}>Maybe Later</Button>
            <Button style={{marginLeft:10}} variant="contained" color="primary">
                Sure, Let's Start
            </Button>
          </div>
        </Fade>
      </Modal>

  
 </Grid>
 <Grid item xs={6} style={{backgroundImage: `url(${Yaaaaa})`}}>

 </Grid>
 </Grid>
 </div>
 );
}
