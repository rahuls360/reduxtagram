import React from "react";
import { render } from "react-dom";

import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

import "./styles/style.styl";

import App from "./components/App";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";

const route = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:photoId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(route, document.getElementById("root"));
