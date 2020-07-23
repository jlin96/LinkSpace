import * as friendRequestAPIUtil from '../util/friend_request_api_util';

export const RECEIVE_ALL_FRIEND_REQUESTS = 'RECEIVE_ALL_FRIEND_REQUESTS';
export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST';

export const receiveFriendRequests = (friend_requests) => ({
    type: RECEIVE_ALL_FRIEND_REQUESTS,
    friend_requests
})

export const receiveFriendRequest = (friend_request) => ({
    type: RECEIVE_FRIEND_REQUEST,
    friend_request
})

export const removeFriendRequest = (friend_request_id) => ({
    type: REMOVE_FRIEND_REQUEST,
    friend_request_id
})

export const fetchFriendRequests = userId => dispatch => {
    return friendRequestAPIUtil.fetchFriendRequests(userId).then( friend_requests => {
        return dispatch(receiveFriendRequests(friend_requests));
    })
}

export const createFriendRequest = friend_request => dispatch => {
    return friendRequestAPIUtil.createFriendRequest(friend_request).then( friend_request => {
        return dispatch(receiveFriendRequest(friend_request));
    })
}

export const updateFriendRequest = friend_request => dispatch => {
    return friendRequestAPIUtil.updateFriendRequest(friend_request).then( friend_request => {
        return dispatch(receiveFriendRequest(friend_request));
    }) 
}

export const deleteFriendRequest = friend_request_id => dispatch => {
    return friendRequestAPIUtil.deleteFriendRequest(friend_request_id).then( () => {
        return dispatch(removeFriendRequest(friend_request_id));
    })
}