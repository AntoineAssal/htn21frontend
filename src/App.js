import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Landingpage from "./Pages/Landing-page";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path={"/"} component={Landingpage} />
        </Switch>
      </Router>
    );
  }
}

export default App;