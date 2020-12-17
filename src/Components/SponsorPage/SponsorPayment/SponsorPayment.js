import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Link from "@material-ui/core/Link";
import SolidHeader from "../../SolidHeader";
import { green } from "@material-ui/core/colors";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

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
    "&:hover": {
      backgroundColor: "transparent",
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
  icon: {
    borderRadius: 3,
    width: 20,
    height: 20,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 20,
      height: 20,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
}));

function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

export default function SponsorPayment() {
  const classes = useStyles();
  const [type, setType] = React.useState(0);
  const [price, setPrice] = React.useState("");
  const [success1, setSuccess1] = React.useState(false);
  const [success2, setSuccess2] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const checkedChange = () => {
    setChecked(!checked);
    console.log(checked);
  };

  const selectDurationClick1 = () => {
    setSuccess1(true);
    setSuccess2(false);
  };

  const selectDurationClick2 = () => {
    setSuccess1(false);
    setSuccess2(true);
  };

  const handleChange = (event, newValue) => {
    setType(newValue);
  };

  const handlepriceChange = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div className={classes.root} style={{ marginTop: "3%" }}>
      <SolidHeader />

      <Card
        style={{
          width: 1000,
          height: 300,
          marginRight: "15%",
          marginTop: "5%",
        }}
      >
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="./Child/boy4.jpg"
              title="Contemplative Reptile"
              style={{ height: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <Typography
                gutterBottom
                style={{
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                  fontSize: "28px",
                }}
              >
                Details
              </Typography>
              <Typography
                gutterBottom
                style={{ textAlign: "left", fontSize: "20px" }}
              >
                <span>
                  <b>Name</b> : Melvin Ortencia
                </span>
                <br></br>
                <span>
                  <b>Age</b> : 5
                </span>
                <br></br>
                <span>
                  <b>Waiting For Sponsorship</b> : 30 days
                </span>
                <br></br>
                <span>
                  <b>Country</b> : Guatemala
                </span>
                <br></br>
                <span>
                  <b>Family Income</b> : 156 €
                </span>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: "auto", marginTop: "3%" }}
      >
        <Paper style={{ height: "auto", width: "70%" }}>
          <br></br>
          <br></br>
          <br></br>
          <span
            style={{
              fontSize: 28,
              textDecorationLine: "underline",
              marginRight: "20%",
            }}
          >
            Select Duration
            <Tooltip
              title="Donate Monthly implies a recurring monthly payment. To cancel please inform us via email or contact us at 1-800-888-3089
"
              style={{ marginRight: "40%", marginButtom: "-10%" }}
            >
              <IconButton aria-label="delete">
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </span>
          <br></br>
          <br></br>
          <br></br>
          <span style={{ fontSize: 30, marginRight: "65%" }}>
            Amount : 25 $
          </span>
          <ButtonGroup
            variant="contained"
            style={{ marginTop: "3%", marginRight: "45%" }}
          >
            <Button
              onClick={selectDurationClick1}
              color={success1 ? "primary" : ""}
              style={{ width: 200 }}
            >
              Donate Once
            </Button>
            <Button
              onClick={selectDurationClick2}
              color={success2 ? "primary" : ""}
              style={{ width: 200 }}
            >
              Donate Monthly
            </Button>
          </ButtonGroup>
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
          <Grid
            container
            item
            xs={12}
            direction="row"
            justify="flex-start"
            alignItems="center"
            style={{ marginTop: "5%", marginLeft: "3%" }}
          >
            <StyledCheckbox onChange={checkedChange} />

            <span style={{ fontSize: 20, marginRight: 450 }}>
              Write a card to your sponsor kid
            </span>
          </Grid>
          <Grid container>
            <Grid item xs={12} style={{ marginTop: "3%", marginRight: "55%" }}>
              <span style={{ fontSize: 22 }}>
                {" "}
                Total Amount : € 25 &nbsp;{" "}
                {success2 ? (
                  <span style={{ fontSize: 22 }}> per Month</span>
                ) : null}
              </span>
            </Grid>
          </Grid>
          <Link href={checked ? "/write-card-now" : "/thank-you"}>
            <Button
              style={{
                marginTop: "5%",
                width: 400,
                height: 50,
                fontWeight: "bold",
                fontSize: 17,
                marginBottom: "3%",
              }}
              variant="contained"
              color="primary"
            >
              Donate Now
            </Button>
          </Link>
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
        style={{ height: 250, marginTop: "3%" }}
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
