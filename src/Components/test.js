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
} from "@material-ui/core/";
import Pagination from "@material-ui/lab/Pagination";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

export default function Test() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [kids, setKids] = React.useState([
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
  ]);

  const [silly, setSilly] = React.useState([
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
  ]);

  const [sponsorKid, setSponsorKid] = React.useState([]);

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

  /*  const handleChange = (name = (event) => {
    console.log(name);
    setkidData({ [name]: event.target.value });
  });*/

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

  const testClick = (name, image, age) =>
    setSponsorKid(
      {
        name,
        image,
        age,
      },
      console.log(name)
    );

  const [GenderData, setGenderData] = React.useState("");
  const [AgeData, setAgeData] = React.useState("");
  const [CountryData, setCountryData] = React.useState("");
  const [MonthData, setMonthData] = React.useState("");

  const [modalState, setModalState] = React.useState({
    open: false,
    modalNumber: null,
    modalData: [
      { id: 1, image: "./Child/boy4.jpg" },
      { id: 2, image: "./Child/boy1.jpg" },
      { id: 3, image: "./Child/boy4.jpg" },
      { id: 4, image: "./Child/boy1.jpg" },
      { id: 5, image: "./Child/boy4.jpg" },
      { id: 6, image: "./Child/boy1.jpg" },
      { id: 7, image: "./Child/boy4.jpg" },
      { id: 8, image: "./Child/boy1.jpg" },
      { id: 9, image: "./Child/boy4.jpg" },
    ],
  });

  const {modalData} = modalState

  

  const handleOpenModal = (modalNumber) => () => {
    setModalState({ open: true, modalNumber: modalNumber });
  };

  const handleCloseModal = () => {
    setModalState({ open: false });
  };

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

        {kids.map((kid) => (
          <Grid item xs={4}>
            <Card>
              <CardMedia component="img" height="250" image={` ${kid.image}`} />
              <Button
                    variant="contained"
                    color="primary"
                    style={{ opacity: 0.3, marginRight: "60%" }}
                    onClick={handleOpenModal(modalData.modalNumber)}
                  >
                    + Details
                  </Button>
              
              
              {modalData.map((modData, index) => (
                <div key={index}>
                  
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleCloseModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open} style={{ width: "80%", height: "50%" }}>
                      <div className={classes.paper}>
                        <Grid container spacing={3}>
                          <Grid
                            item
                            xs={6}
                            style={{
                              backgroundImage: `url(${index.image})`,
                              width: "100%",
                              height: "100%",
                            }}
                          ></Grid>
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
              ))}
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "left" }}
                >
                  <span>
                    <b>Name</b> : {kid.name}
                  </span>
                  <br></br>
                  <span>
                    <b>Age</b> : {kid.age}
                  </span>
                  <br></br>
                  <span>
                    <b>Waiting For Sponsorship</b> : {kid.WaitForSponsor} days
                  </span>
                  <br></br>
                  <span>
                    <b>Country</b> : {kid.Country}
                  </span>
                  <br></br>
                  <span>
                    <b>Family Income</b> : {kid.FamilyIncome} €
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
        ))}
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
    </div>
  );
}
