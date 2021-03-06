import * as postAPIUtil from '../util/post_api_util'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const CURRENT_POST = 'CURRENT_POST';

export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
})

export const currentPost = post => ({
    type: CURRENT_POST,
    post
})

export const fetchPosts = () => dispatch => {
    return postAPIUtil.fetchPosts().then( posts => {
        return dispatch(receiveAllPosts(posts));
    });
}

export const fetchPost = postId => dispatch => {
    return postAPIUtil.fetchPost(postId).then(post => {
        return dispatch(receivePost(post));
    });
}

export const createPost = post => dispatch => {
    return postAPIUtil.createPost(post).then(post => {
        return dispatch(receivePost(post));
    });
}

export const updatePost = post => dispatch => {
    return postAPIUtil.updatePost(post).then( post => {
        return dispatch(receivePost(post));
    });
}

export const deletePost = postId => dispatch => {
    return postAPIUtil.deletePost(postId).then( () => {
        return dispatch(removePost(postId));
    });
}

export const userPost = userId => dispatch => {
    return postAPIUtil.userPost(userId).then( posts => {
        return dispatch(receiveAllPosts(posts));
    });
}

export const photoPost = formData => dispatch => {
    return postAPIUtil.photoPost(formData).then( post => {
        return dispatch(receivePost(post));
    });
}