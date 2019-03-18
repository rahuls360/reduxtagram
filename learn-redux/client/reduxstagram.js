import React from "react";
import { render } from "react-dom";

import { Router, Route, IndexRoute, browserHistory } from "react-router";

import "./styles/style.styl";

import Main from "./components/Main";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";

const route = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Route path="/view/:photoId" component={Single} />
    </Route>
  </Router>
);

render(route, document.getElementById("root"));
