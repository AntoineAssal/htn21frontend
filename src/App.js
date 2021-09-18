import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ScrollToTopRoute from "./ScrollToTopRoute";

import Landingpage from "./Pages/Landing-page";
import Register from "./Pages/Register";
import NotFound from "./Pages/404";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }

  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Landingpage} />
          <ScrollToTopRoute path={"/Register"} component={Register} />
          <ScrollToTopRoute component={NotFound} />

        </Switch>
      </Router>
    );
  }
}

export default App;