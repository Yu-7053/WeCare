import React, {useCallback} from "react";
import useScreenReader from 'react-screenreader';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Info from "@material-ui/icons/Info";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link"

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

function WriteContent() {
  const classes = useStyles();
  const [type, setType] = React.useState(0);
  const [price, setPrice] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const { reader, read, a11y } = useScreenReader();
  const onButtonClick = useCallback(() => read(`Hello screen reader!`), []);

  const timer = React.useRef();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const handleChange = (event, newValue) => {
    setType(newValue);
  };

  const handlepriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      setShow(false);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setShow(true);
      }, 2000);
    }
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
              <Grid item xs={6} style={{ marginTop: "8%" }}>
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
              <Grid item xs={6} style={{ marginTop: "3%" }}>
                <TextField
                  style={{ marginRight: 2, width: 420 }}
                  id="outlined-basic"
                  label="Kid's ID"
                  variant="outlined"
                />
              </Grid>
              <Grid itme xs={3} style={{ marginTop: "3%" }}>
                <Info
                  type="button"
                  onClick={handleOpen}
                  style={{ marginRight: "90%", marginTop: "4%" }}
                ></Info>
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
                      <h2 id="transition-modal-title">What's the kid's ID?</h2>
                      <p id="transition-modal-description">
                        The kid's ID was sent to your personal email while you
                        sponsor a child.
                      </p>
                    </div>
                  </Fade>
                </Modal>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3} style={{ marginTop: "5%" }}>
                <span style={{ fontSize: 20 }}> From</span>
              </Grid>
              <Grid item xs={6} style={{ marginTop: "3%" }}>
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
                <textarea
                  style={{
                    minWidth: 800,
                    minHeight: 200,
                    marginRight: 2,
                    width: 800,
                    height: 200,
                    maxWidth: 800,
                    maxHeight: 200,
                  }}
                ></textarea>
              </Grid>
            </Grid>
          </form>
          
          
          <div className={classes.wrapper} style={{ marginTop: "2%" }}>
          
            <Fab
              aria-label="save"
              color="primary"
              variant="extended"
              className={buttonClassname}
              onClick={handleButtonClick}
            >
              {success ?  <Link href="/thank-you"
            style={{ textDecoration: "none",color:"black"}}> Back to Home </Link> : "Send"}
            </Fab>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
            
           
            
          </div>
          
        </Paper>
        
      </Grid>
    </div>
  );
}

export default WriteContent;
