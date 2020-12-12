import "./App.css";
import React, { Fragment } from "react";
import Header from "./Components/Landingpage/Header/Header";
import Homepage from "../src/Components/Landingpage/Homepage";
import Sponsormainpage from "./Components/SponsorPage/Sponsormainpage";
import Aboutus from "./Components/AboutUs/AboutUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
