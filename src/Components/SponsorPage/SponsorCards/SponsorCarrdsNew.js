import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  TextField,
  MenuItem,
  Paper,
  Link
} from "@material-ui/core/";
import Pagination from "@material-ui/lab/Pagination";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
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
}));

export default function SponsorCards(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const handleOpen6 = () => {
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };

  const handleOpen7 = () => {
    setOpen7(true);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };

  const handleOpen8 = () => {
    setOpen8(true);
  };

  const handleClose8 = () => {
    setOpen8(false);
  };

  

  const kidsData = {
    details: [
      {
        name: "Melvin Ortencia",
        image: "./Child/boy4.jpg",
        ageGroup: "4-6",
        age: 5,
        BirthYear: 2015,
        BirthMonth: "November",
        Birthdate: "28th",
        Gender: "Boy",
        WaitForSponsor: 30,
        FamilyIncome: 156,
        Country: "Guatemala",
      },
      {
        name: "Edson Ayubu",
        image: "./Child/boy2.jpg",
        age: 12,
        ageGroup: "10-14",
        BirthYear: 2008,
        BirthMonth: "August",
        Birthdate: "13th",
        Gender: "Boy",
        WaitForSponsor: 300,
        FamilyIncome: 200,
        Country: "Tanzania",
      },
      {
        name: "Austin Malaski",
        image: "./Child/boy3.jpg",
        age: 4,
        ageGroup: "4-6",
        BirthYear: 2016,
        BirthMonth: "Febuary",
        Birthdate: "28th",
        Gender: "Boy",
        WaitForSponsor: 100,
        FamilyIncome: 210,
        Country: "Kosovo",
      },
      {
        name: "Eki Nolava",
        image: "./Child/boy1.jpg",
        age: 5,
        ageGroup: "4-6",
        BirthYear: 2015,
        BirthMonth: "June",
        Birthdate: "10th",
        Gender: "Boy",
        WaitForSponsor: 430,
        FamilyIncome: 150,
        Country: "Indonesia",
      },
      {
        name: "Souraya Paracana",
        image: "./Child/girl1.jpg",
        age: 8,
        ageGroup: "7-9",
        BirthYear: 2012,
        BirthMonth: "July",
        Birthdate: "5th",
        Gender: "Girl",
        WaitForSponsor: 134,
        FamilyIncome: 169,
        Country: "Niger",
      },
      {
        name: "Harira Sapuna",
        image: "./Child/girl3.jpg",
        age: 7,
        ageGroup: "7-9",
        BirthYear: 2012,
        BirthMonth: "October",
        Birthdate: "30th",
        Gender: "Girl",
        WaitForSponsor: 73,
        FamilyIncome: 120,
        Country: "Malawi",
      },
      {
        name: "Kabita Bhattarai",
        image: "./Child/girl2.jpg",
        age: 12,
        ageGroup: "10-14",
        BirthYear: 2008,
        BirthMonth: "May",
        Birthdate: "18th",
        Gender: "Girl",
        WaitForSponsor: 190,
        FamilyIncome: 201,
        Country: "Nepal",
      },
      {
        name: "Albert Lare",
        image: "./Child/boy5.jpeg",
        age: 6,
        ageGroup: "4-6",
        BirthYear: 2014,
        BirthMonth: "December",
        Birthdate: "25th",
        Gender: "Boy",
        WaitForSponsor: 5,
        FamilyIncome: 200,
        Country: "Togo",
      },
      {
        name: "Kyara Lopez",
        image: "./Child/girl4.jpg",
        age: 5,
        ageGroup: "4-6",
        BirthYear: 2015,
        BirthMonth: "March",
        Birthdate: "23th",
        Gender: "Girl",
        WaitForSponsor: 50,
        FamilyIncome: 134,
        Country: "Nicaragua",
      },
    ],
    ageGroups: [
      {
        ageGroup: "4-6",
        id: 1,
      },
      {
        ageGroup: "7-9",
        id: 2,
      },
      {
        ageGroup: "10-14",
        id: 3,
      },
    ],
    birthMonth: [
      {
        Month: "January",
      },
      {
        Month: "February",
      },
      {
        Month: "March",
      },
      {
        Month: "April",
      },
      {
        Month: "May",
      },
      {
        Month: "June",
      },
      {
        Month: "July",
      },
      {
        Month: "August",
      },
      {
        Month: "September",
      },
      {
        Month: "October",
      },
      {
        Month: "November",
      },
      {
        Month: "December",
      },
    ],
    Gender: [
      {
        gender: "boy",
      },
      {
        gender: "girl",
      },
    ],
  };

  const handleGenderChange = (event) => {
    setGenderData(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonthData(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAgeData(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountryData(event.target.value);
  };

  const [GenderData, setGenderData] = React.useState("");
  const [AgeData, setAgeData] = React.useState("");
  const [CountryData, setCountryData] = React.useState("");
  const [MonthData, setMonthData] = React.useState("");

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Paper variant="outlined">
            <TextField
              id="standard-select-currency"
              select
              label="Country"
              value={CountryData}
              onChange={handleCountryChange}
              style={{ width: 250, marginBottom: "1%", marginRight: "5%" }}
            >
              {kidsData.details.map((option) => (
                <MenuItem key={option.name} value={option.Country}>
                  {option.Country}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-select-currency"
              select
              label="Age"
              value={AgeData}
              onChange={handleAgeChange}
              style={{ width: 250, marginBottom: "1%", marginRight: "5%" }}
            >
              {kidsData.ageGroups.map((option) => (
                <MenuItem key={option.id} value={option.ageGroup}>
                  {option.ageGroup}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-select-currency"
              select
              label="Birth Month"
              value={MonthData}
              onChange={handleMonthChange}
              style={{ width: 250, marginBottom: "1%", marginRight: "5%" }}
            >
              {kidsData.birthMonth.map((option) => (
                <MenuItem key={option.Month} value={option.Month}>
                  {option.Month}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-select-currency"
              select
              label="Gender"
              value={GenderData}
              onChange={handleGenderChange}
              style={{ width: 250, marginBottom: "1%" }}
            >
              {kidsData.Gender.map((option) => (
                <MenuItem key={option.gender} value={option.gender}>
                  {option.gender}
                </MenuItem>
              ))}
            </TextField>
            <br></br>
            <Button style={{ marginLeft: "80%", marginBottom: "1%" }}>
              <b>RESET</b>
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "3%", marginBottom: "1%" }}
            >
              Primary
            </Button>
          </Paper>
        </Grid>

        {/*kids 1 */}
        <Grid item xs={4}>
          <Card>
            <CardMedia component="img" height="250" image="./Child/boy4.jpg" />

            <Button
              variant="contained"
              color="primary"
              style={{ opacity: 0.3, marginRight: "60%" }}
              onClick={handleOpen}
            >
              + Details
            </Button>

            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left" }}
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
            <Link  href="/sponsor-payment">
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", marginBottom: "5%", width: "60%" }}
            >
              SPONSOR NOW
            </Button>
            </Link>
          </Card>
        </Grid>

        {/*kids 2 */}
        <Grid item xs={4}>
          <Card>
            <CardMedia component="img" height="250" image="./Child/boy2.jpg" />

            <Button
              variant="contained"
              color="primary"
              style={{ opacity: 0.3, marginRight: "60%" }}
              onClick={handleOpen1}
            >
              + Details
            </Button>

            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left" }}
              >
                <span>
                  <b>Name</b> : Edson Ayubu
                </span>
                <br></br>
                <span>
                  <b>Age</b> : 12
                </span>
                <br></br>
                <span>
                  <b>Waiting For Sponsorship</b> : 300 days
                </span>
                <br></br>
                <span>
                  <b>Country</b> : Tanzania
                </span>
                <br></br>
                <span>
                  <b>Family Income</b> : 200 €
                </span>
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", marginBottom: "5%", width: "60%" }}
            >
              SPONSOR NOW
            </Button>
          </Card>
        </Grid>

        {/*kids 3 */}
        <Grid item xs={4}>
          <Card>
            <CardMedia component="img" height="250" image="./Child/boy3.jpg" />

            <Button
              variant="contained"
              color="primary"
              style={{ opacity: 0.3, marginRight: "60%" }}
              onClick={handleOpen2}
            >
              + Details
            </Button>

            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left" }}
              >
                <span>
                  <b>Name</b> : Austin Malaski
                </span>
                <br></br>
                <span>
                  <b>Age</b> : 4
                </span>
                <br></br>
                <span>
                  <b>Waiting For Sponsorship</b> : 100 days
                </span>
                <br></br>
                <span>
                  <b>Country</b> : Kosovo
                </span>
                <br></br>
                <span>
                  <b>Family Income</b> : 210 €
                </span>
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", marginBottom: "5%", width: "60%" }}
            >
              SPONSOR NOW
            </Button>
          </Card>
        </Grid>

        {/*kids 4 */}
        <Grid item xs={4}>
          <Card>
            <CardMedia component="img" height="250" image="./Child/boy1.jpg" />

            <Button
              variant="contained"
              color="primary"
              style={{ opacity: 0.3, marginRight: "60%" }}
              onClick={handleOpen3}
            >
              + Details
            </Button>

            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left" }}
              >
                <span>
                  <b>Name</b> : Eki Nolava
                </span>
                <br></br>
                <span>
                  <b>Age</b> : 5
                </span>
                <br></br>
                <span>
                  <b>Waiting For Sponsorship</b> : 430 days
                </span>
                <br></br>
                <span>
                  <b>Country</b> : Indonesia
                </span>
                <br></br>
                <span>
                  <b>Family Income</b> : 150 €
                </span>
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", marginBottom: "5%", width: "60%" }}
            >
              SPONSOR NOW
            </Button>
          </Card>
        </Grid>

        {/*kids 5 */}
        <Grid item xs={4}>
          <Card>
            <CardMedia component="img" height="250" image="./Child/girl1.jpg" />

            <Button
              variant="contained"
              color="primary"
              style={{ opacity: 0.3, marginRight: "60%" }}
              onClick={handleOpen4}
            >
              + Details
            </Button>

            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left" }}
              >
                <span>
                  <b>Name</b> : Souraya Paracana
                </span>
                <br></br>
                <span>
                  <b>Age</b> : 8
                </span>
                <br></br>
                <span>
                  <b>Waiting For Sponsorship</b> : 134 days
                </span>
                <br></br>
                <span>
                  <b>Country</b> : Niger
                </span>
                <br></br>
                <span>
                  <b>Family Income</b> : 169 €
                </span>
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", marginBottom: "5%", width: "60%" }}
            >
              SPONSOR NOW
            </Button>
          </Card>
        </Grid>

        {/*kids 6 */}
        <Grid item xs={4}>
          <Card>
            <CardMedia component="img" height="250" image="./Child/girl3.jpg" />

            <Button
              variant="contained"
              color="primary"
              style={{ opacity: 0.3, marginRight: "60%" }}
              onClick={handleOpen5}
            >
              + Details
            </Button>

            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left" }}
              >
                <span>
                  <b>Name</b> : Harira Sapuna
                </span>
                <br></br>
                <span>
                  <b>Age</b> : 7
                </span>
                <br></br>
                <span>
                  <b>Waiting For Sponsorship</b> : 73 days
                </span>
                <br></br>
                <span>
                  <b>Country</b> : Malawi
                </span>
                <br></br>
                <span>
                  <b>Family Income</b> : 120 €
                </span>
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", marginBottom: "5%", width: "60%" }}
            >
              SPONSOR NOW
            </Button>
          </Card>
        </Grid>

        {/*kids 7 */}
        <Grid item xs={4}>
          <Card>
            <CardMedia component="img" height="250" image="./Child/girl2.jpg" />

            <Button
              variant="contained"
              color="primary"
              style={{ opacity: 0.3, marginRight: "60%" }}
              onClick={handleOpen6}
            >
              + Details
            </Button>

            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left" }}
              >
                <span>
                  <b>Name</b> : Kabita Bhattarai
                </span>
                <br></br>
                <span>
                  <b>Age</b> : 12
                </span>
                <br></br>
                <span>
                  <b>Waiting For Sponsorship</b> : 190 days
                </span>
                <br></br>
                <span>
                  <b>Country</b> : Nepal
                </span>
                <br></br>
                <span>
                  <b>Family Income</b> : 201 €
                </span>
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", marginBottom: "5%", width: "60%" }}
            >
              SPONSOR NOW
            </Button>
          </Card>
        </Grid>

        {/*kids 8 */}
        <Grid item xs={4}>
          <Card>
            <CardMedia component="img" height="250" image="./Child/boy5.jpg" />

            <Button
              variant="contained"
              color="primary"
              style={{ opacity: 0.3, marginRight: "60%" }}
              onClick={handleOpen7}
            >
              + Details
            </Button>

            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left" }}
              >
                <span>
                  <b>Name</b> : Albert Lare
                </span>
                <br></br>
                <span>
                  <b>Age</b> : 6
                </span>
                <br></br>
                <span>
                  <b>Waiting For Sponsorship</b> : 5 days
                </span>
                <br></br>
                <span>
                  <b>Country</b> : Togo
                </span>
                <br></br>
                <span>
                  <b>Family Income</b> : 200 €
                </span>
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", marginBottom: "5%", width: "60%" }}
            >
              SPONSOR NOW
            </Button>
          </Card>
        </Grid>

        {/*kids 9 */}
        <Grid item xs={4}>
          <Card>
            <CardMedia component="img" height="250" image="./Child/girl4.jpg" />

            <Button
              variant="contained"
              color="primary"
              style={{ opacity: 0.3, marginRight: "60%" }}
              onClick={handleOpen8}
            >
              + Details
            </Button>

            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left" }}
              >
                <span>
                  <b>Name</b> : Kyara Lopez
                </span>
                <br></br>
                <span>
                  <b>Age</b> : 5
                </span>
                <br></br>
                <span>
                  <b>Waiting For Sponsorship</b> : 50 days
                </span>
                <br></br>
                <span>
                  <b>Country</b> : Nicaragua
                </span>
                <br></br>
                <span>
                  <b>Family Income</b> : 134 €
                </span>
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: "bold", marginBottom: "5%", width: "60%" }}
            >
              SPONSOR NOW
            </Button>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Pagination count={10} style={{ alignContent: "center" }} />
        </Grid>
      </Grid>

{/* Kid 1*/ }
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
        <Fade in={open} style={{ width: "80%", height: "50%" }}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <img
                  src="./Child/boy4.jpg"
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </Grid>
              <Grid item xs={6}>
                <h2
                  id="transition-modal-title"
                  style={{ textDecorationLine: "underline" }}
                >
                  Details
                </h2>

                <p id="transition-modal-description">
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
                <br></br>
                <span>
                  <b>Gender</b> : Male
                </span>
                <br></br>
                <span>
                  <b>Enjoys</b> : Running, playing with dolls
                </span>
                <br></br>
                <span>
                  <b>Talents</b> : Singing
                </span>
                </p>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>

{/* Kid 2*/ }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open1} style={{ width: "80%", height: "50%" }}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <img
                  src="./Child/boy2.jpg"
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </Grid>
              <Grid item xs={6}>
                <h2
                  id="transition-modal-title"
                  style={{ textDecorationLine: "underline" }}
                >
                  Details
                </h2>
                <p id="transition-modal-description">
                  react-transition-group animates me.
                </p>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>

      {/* Kid 3*/ }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2} style={{ width: "80%", height: "50%" }}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <img
                  src="./Child/boy3.jpg"
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </Grid>
              <Grid item xs={6}>
                <h2
                  id="transition-modal-title"
                  style={{ textDecorationLine: "underline" }}
                >
                  Details
                </h2>
                <p id="transition-modal-description">
                  react-transition-group animates me.
                </p>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>

      {/* Kid 4*/ }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open3}
        onClose={handleClose3}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open3} style={{ width: "80%", height: "50%" }}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6} style={{height:400}}>
                <img
                  src="./Child/boy1.jpg"
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </Grid>
              <Grid item xs={6}>
                <h2
                  id="transition-modal-title"
                  style={{ textDecorationLine: "underline" }}
                >
                  Details
                </h2>
                <p id="transition-modal-description">
                  react-transition-group animates me.
                </p>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>

      {/* Kid 5*/ }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open4}
        onClose={handleClose4}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open4} style={{ width: "80%", height: "50%" }}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <img
                  src="./Child/girl1.jpg"
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </Grid>
              <Grid item xs={6}>
                <h2
                  id="transition-modal-title"
                  style={{ textDecorationLine: "underline" }}
                >
                  Details
                </h2>
                <p id="transition-modal-description">
                  react-transition-group animates me.
                </p>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>

      {/* Kid 6*/ }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open5}
        onClose={handleClose5}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open5} style={{ width: "80%", height: "50%" }}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6} style={{height:400}}>
                <img
                  src="./Child/girl3.jpg"
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </Grid>
              <Grid item xs={6}>
                <h2
                  id="transition-modal-title"
                  style={{ textDecorationLine: "underline" }}
                >
                  Details
                </h2>
                <p id="transition-modal-description">
                  react-transition-group animates me.
                </p>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>

      {/* Kid 7*/ }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open6}
        onClose={handleClose6}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open6} style={{ width: "80%", height: "50%" }}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <img
                  src="./Child/girl2.jpg"
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </Grid>
              <Grid item xs={6}>
                <h2
                  id="transition-modal-title"
                  style={{ textDecorationLine: "underline" }}
                >
                  Details
                </h2>
                <p id="transition-modal-description">
                  react-transition-group animates me.
                </p>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>

      {/* Kid 8*/ }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open7}
        onClose={handleClose7}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open7} style={{ width: "80%", height: "50%" }}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <img
                  src="./Child/boy5.jpg"
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </Grid>
              <Grid item xs={6}>
                <h2
                  id="transition-modal-title"
                  style={{ textDecorationLine: "underline" }}
                >
                  Details
                </h2>
                <p id="transition-modal-description">
                  react-transition-group animates me.
                </p>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>

      {/* Kid 9*/ }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open8}
        onClose={handleClose8}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open8} style={{ width: "80%", height: "50%" }}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <img
                  src="./Child/girl4.jpg"
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </Grid>
              <Grid item xs={6}>
                <h2
                  id="transition-modal-title"
                  style={{ textDecorationLine: "underline" }}
                >
                  Details
                </h2>
                <p id="transition-modal-description">
                  react-transition-group animates me.
                </p>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
