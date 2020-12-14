import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

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

export default function DonatePayment() {
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
    <div className={classes.root} style={{ marginTop: "3%" }}>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: 1500 }}
      >
        <Paper style={{ height: 1500, width: "70%" }}>
          <br></br>
          <br></br>
          <br></br>
          <span
            style={{
              fontSize: 28,
              textDecorationLine: "underline",
              marginRight: "70%",
            }}
          >
            Select the Amount
          </span>
          <Tabs
            value={type}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            style={{ marginTop: "3%", marginRight: "60%" }}
          >
            <Tab label="Donate Once"></Tab>
            <Tab label="Donate Monthly" />
          </Tabs>
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
                <span style={{ fontSize: 20 }}> Name</span>
              </Grid>
              <Grid item xs={9} style={{ marginTop: "8%" }}>
                <TextField
                  style={{ marginRight: 40 }}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />

                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3} style={{ marginTop: "5%" }}>
                <span style={{ fontSize: 20 }}> Email</span>
              </Grid>
              <Grid item xs={9} style={{ marginTop: "3%" }}>
                <TextField
                  style={{ marginRight: 2, width: 420 }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3} style={{ marginTop: "5%" }}>
                <span style={{ fontSize: 20 }}> Phone Number</span>
              </Grid>
              <Grid item xs={9} style={{ marginTop: "3%" }}>
                <TextField
                  style={{ marginRight: 2, width: 420 }}
                  id="outlined-basic"
                  label="Phone number"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3} style={{ marginTop: "5%" }}>
                <span style={{ fontSize: 20 }}> Gender</span>
              </Grid>
              <Grid item xs={9} style={{ marginTop: "3%" }}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem>Male</MenuItem>
                    <MenuItem>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3} style={{ marginTop: "5%" }}>
                <span style={{ fontSize: 20 }}> Birthday</span>
              </Grid>
              <Grid item xs={9} style={{ marginTop: "3%" }}>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </form>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span
            style={{
              fontSize: 28,
              textDecorationLine: "underline",

              marginRight: "70%",
            }}
          >
            Payment Details
          </span>
          <Grid container>
            <Grid item xs={3} style={{ marginTop: "5%" }}>
              <span style={{ fontSize: 20 }}> Card Number</span>
            </Grid>
            <Grid item xs={9} style={{ marginTop: "3%" }}>
              <TextField
                style={{ width: 420 }}
                id="outlined-number"
                label="Enter card number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3} style={{ marginTop: "5%" }}>
              <span style={{ fontSize: 20 }}> Name on the card</span>
            </Grid>
            <Grid item xs={9} style={{ marginTop: "3%" }}>
              <TextField
                style={{ marginRight: 40 }}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />

              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3} style={{ marginTop: "5%" }}>
              <span style={{ fontSize: 20 }}> Country</span>
            </Grid>
            <Grid item xs={9} style={{ marginTop: "3%" }}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem>Afghanistan</MenuItem>
                  <MenuItem>Albania</MenuItem>
                  <MenuItem>Algeria</MenuItem>
                  <MenuItem>Andorra</MenuItem>
                  <MenuItem>Angola</MenuItem>
                  <MenuItem>Antigua & Deps</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3} style={{ marginTop: "5%" }}>
              <span style={{ fontSize: 20 }}> Address</span>
            </Grid>
            <Grid item xs={9} style={{ marginTop: "3%" }}>
              <TextField
                style={{ marginRight: 2, width: 420 }}
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3} style={{ marginTop: "5%" }}>
              <span style={{ fontSize: 20 }}> City</span>
            </Grid>
            <Grid item xs={9} style={{ marginTop: "3%" }}>
              <TextField
                style={{ marginRight: 2, width: 420 }}
                id="outlined-basic"
                label="City"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} style={{ marginTop: "5%", marginRight: "55%" }}>
              <span style={{ fontSize: 25 }}> Total Amount : € 7468</span>
            </Grid>
          </Grid>
          <Button
            style={{
              marginTop: "5%",
              width: 400,
              height: 50,
              fontWeight: "bold",
              fontSize: 17,
            }}
            variant="contained"
            color="primary"
          >
            Donate Now
          </Button>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        item
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: 250 }}
      >
        <Paper variant="outlined" style={{ width: "50%" }}>
          <p
            style={{
              fontSize: 21,
              textDecorationLine: "underline",
              textDecorationColor: "#035AA6",
            }}
          >
            Have Questions?
          </p>
          <p
            style={{
              fontSize: 18,
              color: "#035AA6",
            }}
          >
            askus@wecare.org
            <br></br>
            1344545647
          </p>
          <p>
            Thank you for making a difference in the lives of children around
            the world
          </p>
        </Paper>
      </Grid>
    </div>
  );
}
