import React from "react";
import Grid from "@material-ui/core/Grid";
import handsHeart from "../../Images/WriteCard/HandHeart.jpg";
import SolidHeader from "../SolidHeader";

export default function ThankYou() {
  const [counter, setCounter] = React.useState(5);

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  }, []);

  {/*React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);*/}

  return (
    <div>
      <SolidHeader />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ backgroundImage: `url(${handsHeart})`, height: 600 }}
      >
        <Grid item xs={12}>
          <h1 style={{ color: "white", fontSize: 50 }}>
            Thank you for your donation
          </h1>
        </Grid>

        {/*<Grid item xs={12} style={{ marginTop: "5%" }}>
          <h1 style={{ color: "white", fontSize: 50 }}>
            Back to Home Page in : {counter}
          </h1>
        </Grid>*/}
      </Grid>
    </div>
  );
}
