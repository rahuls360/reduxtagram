import { createStore, compose } from "redux";
import { syncHistoryWithState } from "react-router-redux";
import { browserHistory } from "react-router";

import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

const defaultState = {
  comments,
  posts
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithState(browserHistory, store);

export default store;
