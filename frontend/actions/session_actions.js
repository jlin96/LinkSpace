import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SESSION_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
    type: SESSION_ERRORS,
    errors
})

export const login = user => dispatch => {
    return sessionAPIUtil.login(user).then( user => {
        return dispatch(receiveCurrentUser(user));
    },
    err => {
        return dispatch(receiveErrors(err.responseJSON));
    });
}

export const signup = user => dispatch => {
    return sessionAPIUtil.signup(user).then( user => {
        return dispatch(receiveCurrentUser(user));
    },
    err => {
        return dispatch(receiveErrors(err.responseJSON));
    });
}

export const logout = () => dispatch => {
    return sessionAPIUtil.logout().then( () => {
        return dispatch(logoutCurrentUser());
    });
}