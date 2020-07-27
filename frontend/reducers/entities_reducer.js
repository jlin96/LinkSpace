import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import currentPostReducer from './current_post_reducer';
import commentReducer from './comments_reducer';
import friendRequestReducer from './friend_request_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    currentPost: currentPostReducer,
    comments: commentReducer,
    friend_requests: friendRequestReducer
});

export default entitiesReducer;