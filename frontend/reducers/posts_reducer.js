import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions'
import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions'


const postsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, action.posts)

        case RECEIVE_POST:
            return Object.assign({}, state, {[action.post.id]: action.post})

        case REMOVE_POST:
            let newState = Object.assign({}, state);
            delete newState[action.postId];
            return newState;

        case RECEIVE_ALL_COMMENTS:
            let commentState = Object.assign({}, state);
            if (Object.keys(action.comments).length !== 0) {
                let currentPost = commentState[Object.values(action.comments)[0].post_id]
                currentPost['comments'] = action.comments;
                commentState[Object.values(action.comments)[0].post_id] = currentPost;
                return commentState;
            } else {
                let currentPost = commentState[action.postId]
                currentPost['comments'] = {};
                commentState[action.postId] = currentPost;
                return commentState;
            }

        case RECEIVE_COMMENT:
            let oldState = Object.assign({}, state);
            oldState[action.comment.post_id]['comments'][action.comment.id] = action.comment;
            return oldState;

        default: 
            return state;
    }
}

export default postsReducer