import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _default = { currentUserId: null };

const sessionReducer = (state = _default, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUserId: action.currentUser.id};
        case LOGOUT_CURRENT_USER:
            return _default;
        default:
            return state;
    }
}

export default sessionReducer;