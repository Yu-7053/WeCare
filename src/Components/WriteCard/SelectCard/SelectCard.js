import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import HandsHeart from "../../../Images/WriteCard/HandHeart.jpg"
import Card1 from "../../../Images/WriteCard/Card1.jpg"
import Card2 from "../../../Images/WriteCard/Card2.jpg"
import Card3 from "../../../Images/WriteCard/Card3.jpg"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Fab from '@material-ui/core/Fab'
import Link from '@material-ui/core/Link'

export default function SelectCard() {
    return (
        <div>
        <Grid container style={{height:600}}>
        <Grid item xs={12} style={{marginTop:"8%"}}>
            <span style={{fontSize:30,}}>Select a Card</span>
        </Grid>

        <Grid container style={{marginLeft:"13%"}}>
        <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="Hello" style={{width:1000}}>
      
      <Grid item xs={3} style={{marginTop:"5%", marginLeft:"8%"}}>
         <Paper style={{backgroundImage:`url(${Card1})`, height:300}}>
                    
                    </Paper>
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
         
          labelPlacement="top"
        />
        </Grid>

        <Grid item xs={3} style={{marginTop:"5%", marginLeft:"8%"}}>
         <Paper style={{backgroundImage:`url(${Card2})`, height:300}}>
                    
                    </Paper>

        <FormControlLabel
          value="down"
          control={<Radio color="primary" />}
          
          labelPlacement="top"
        />

        </Grid>

        <Grid item xs={3} style={{marginTop:"5%", marginLeft:"8%"}}>
         <Paper style={{backgroundImage:`url(${Card3})`, height:300}}>
                    
                    </Paper>
        <FormControlLabel
          value="left"
          control={<Radio color="primary" />}
          
          labelPlacement="top"
        />
    </Grid>
    </RadioGroup>
    </FormControl>
    </Grid>
    <Link href="/write-content" style={{marginLeft:"85%"}}>
    <Fab variant="extended" style={{marginLeft:"90%",fontWeight:"bold"}}>NEXT</Fab>
    </Link>
    </Grid>
    </div>
    )
}
