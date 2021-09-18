import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
import axios from 'axios';

import Navbar from "./components/Navbar";

import Landingpage from "./Pages/Landing-page";
import Register from "./Pages/Register";
import NotFound from "./Pages/404";

class App extends Component {
  componentDidMount() {
    const ff = axios.get("https://priceisthegoatbackend.herokuapp.com/api/user/1");
    console.log(ff);
    this.props.hideLoader();
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Landingpage} />
          <ScrollToTopRoute path={"/register"} component={Register} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;