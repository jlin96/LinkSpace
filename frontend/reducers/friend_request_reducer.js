import {RECEIVE_ALL_FRIEND_REQUESTS, RECEIVE_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST} from '../actions/friend_request_actions'

const friendRequestReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_FRIEND_REQUESTS:
            return Object.assign({}, action.friend_requests);

        case RECEIVE_FRIEND_REQUEST:
            return Object.assign({}, state, { [action.friend_request.id]: action.friend_request})

        case REMOVE_FRIEND_REQUEST:
            let newState = Object.assign({}, state);
            delete newState[action.friend_request_id];
            return newState;

        default:
            return state;
    }
}
export default friendRequestReducer;