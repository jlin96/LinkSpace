import {RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions'

const commentReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_COMMENTS:
            return Object.assign({}, action.comments);

        case RECEIVE_COMMENT:
            return Object.assign({}, state, { [action.comment.id]: action.comment })

        case REMOVE_COMMENT:
            let newState = Object.assign({}, state);
            delete newState[action.commentId];
            return newState;

        default:
            return state;
    }
}
export default commentReducer;