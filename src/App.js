import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";
import axios from 'axios';

import Navbar from "./components/Navbar";

import Landingpage from "./Pages/Landing-page";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Faq from "./Pages/Faq";
import NotFound from "./Pages/404";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Landingpage} />
          <ScrollToTopRoute path={"/register"} component={Register} />
          <ScrollToTopRoute path={"/login"} component={Login} />
          <ScrollToTopRoute path={"/faq"} component={Faq} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;