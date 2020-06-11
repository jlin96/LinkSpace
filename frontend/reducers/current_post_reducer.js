import { CURRENT_POST } from '../actions/post_actions';

const currentPostReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case CURRENT_POST:
            return Object.assign({}, action.post)

        default:
            return state;

    }
}

export default currentPostReducer;