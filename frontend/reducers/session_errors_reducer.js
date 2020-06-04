import { RECEIVE_CURRENT_USER, SESSION_ERRORS } from "../actions/session_actions";

const _default = [];

const sessionErrorsReducers = (state = _default, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SESSION_ERRORS:
            return Object.assign({}, action.errors);
        case RECEIVE_CURRENT_USER:
            return _default;
        default:
            return state;
    }
}

export default sessionErrorsReducers;