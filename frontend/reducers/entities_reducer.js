import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import currentPostReducer from './current_post_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    currentPost: currentPostReducer
});

export default entitiesReducer;