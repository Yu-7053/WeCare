import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import HandsHeart from "../../../Images/HowHelp/HandsHeart.jpg"
import LaughingBoy from "../../../Images/HowHelp/LaughingBoy.jpeg"
import Volunteers from "../../../Images/HowHelp/Volunteers.jpeg"

const images = [
    {
      url: HandsHeart,
      title: 'HELP WITH YOUR DONATION',
      width: '33.3333333333333333333%',
    },
    {
      url: LaughingBoy,
      title: 'SPONSOR A CHILD',
      width: '33.3333333333333333333%',
    },
    {
      url: Volunteers,
      title: 'VOLUNTEER FOR US',
      width: '33.3333333333333333333%',
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 400,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      fontSize :20
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

export default function HowHelp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <p style={{
            fontWeight: "bold",
            fontSize: 35,
            marginTop: 50,
            textDecorationLine: "underline",
            textDecorationColor: "#035AA6",
          }}>
              How you can help ?
          </p>
          <span style={{fontSize:25, marginLeft:30, marginRight:30}}> 
          We believe we can achieve a lot more when we work together! 
          <br></br>Make a donation, 
          sponsor a child or even volunteer your time to get involved.
          </span>
        </Grid>
        <div className={classes.root} style={{marginTop:50}}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
        
      </Grid>
    </div>
  );
}