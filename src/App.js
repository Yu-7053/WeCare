import "./App.css";
import React, { Fragment } from "react";
import Header from "./Components/Landingpage/Header/Header";
import Homepage from "../src/Components/Landingpage/Homepage";
import Sponsormainpage from "./Components/SponsorPage/Sponsormainpage";
import Aboutus from "./Components/AboutUs/AboutUs";
import DonateNow from "./Components/DonateNow/DonateNow";
import Footer from "./Components/Footer/Footer";
import WriteCard from "./Components/WriteCard/WriteCard"
import WriteContent from "./Components/WriteCard/WriteContent/WriteContent"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./Components/test";

function App() {
  return (
    <div className="App">

      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about-us" exact component={Aboutus} />
            <Route path="/sponsor-now" exact component={Sponsormainpage} />
            <Route path="/donate-now" exact component={DonateNow} />
            <Route path="/write-card-now" exact component={WriteCard} />
            <Route path="/write-content" exact component={WriteContent} />
            <Route path="/test" exact component={Test} />



          </Switch>
         
        </Fragment>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
