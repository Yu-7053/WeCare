import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "30%",
  },
});

export default function SponsorCards() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={10}
      alignItems="center"
      style={{ marginLeft: "10%" }}
    >
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <Button
              variant="contained"
              color="primary"
              style={{ opacity: 0.3, marginRight: "60%" }}
            >
              + Details
            </Button>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button
            variant="contained"
            color="primary"
            style={{ fontWeight: "bold", marginBottom: "5%", width: "60%" }}
          >
            SPONSOR NOW
          </Button>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ opacity: 0.3, marginRight: "60%" }}
          >
            + Details
          </Button>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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

      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          ></CardMedia>
          <Button
            variant="contained"
            color="primary"
            style={{ opacity: 0.3, marginRight: "60%" }}
          >
            + Details
          </Button>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
    </Grid>
  );
}
