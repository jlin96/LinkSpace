import * as userAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUsers = () => dispatch => {
    return userAPIUtil.fetchUsers().then( users => {
        return dispatch(receiveAllUsers(users));
    });
}

export const fetchUser = userId => dispatch => {
    return userAPIUtil.fetchUser(userId).then( user => {
        return dispatch(receiveUser(user));
    });
}

export const updateUser = user => dispatch => {
    return userAPIUtil.updateUser(user).then( user => {
        return dispatch(receiveUser(user));
    });
}
