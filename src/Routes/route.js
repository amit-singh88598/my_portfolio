import React from "react";
import { Switch, Route } from "react-router";
import About from "../Pages/about";
import Education from "../Pages/education";
import Experience from "../Pages/experience";
import Home from "../Pages/home";
import MyWork from "../Pages/myWork";

function Routes(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/myWork" component={MyWork} />
      </Switch>
    </div>
  );
}

export default Routes;
