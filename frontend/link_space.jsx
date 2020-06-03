import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import * as sessionApiUtil from './util/session_api_util';
import { login, logout } from './actions/session_actions';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  // window.login = login;
  // window.logout = logout;
  // window.login = sessionApiUtil.login;
  // window.signup = sessionApiUtil.signup;
  // window.logout = sessionApiUtil.logout
  ReactDOM.render(<Root store={store}/>, root);
});
