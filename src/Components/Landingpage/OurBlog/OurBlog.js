import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import KidsSun from "../../../Images/OurBlog/KidsSun.jpeg"


const useStyles = makeStyles({
    root: {
      maxWidth: 600,
    },
    media: {
      height: 300,
    },
  });
export default function OurBlog() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <p style={{
            fontWeight: "bold",
            fontSize: 35,
            marginTop: 50,
            textDecorationLine: "underline",
            textDecorationColor: "#035AA6",
          }}>
             From Our Blog
          </p>
        </Grid>
        <Grid xs={6}>
        <Card className={classes.root} style={{marginLeft:100}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/OurBlog/KidsSun.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:22}}>
          Kids can do amazing things when told to believe
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid xs={6}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/OurBlog/Hands.webp"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:22}}>
          Focused on Global Goals for a better world
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
      </Grid>
    </div>
  );
}