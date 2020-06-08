import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUserId),
});

const Auth = ({ loggedIn, exact, path, component: Component }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  )
};

const Protected = ({ loggedIn, exact, path, component: Component }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        return (
        loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
      }
    />
  )
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));