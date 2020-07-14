import * as commentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = (comments, postId) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments,
    postId
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const fetchComments = postId => dispatch => {
    return commentAPIUtil.fetchComments(postId).then( comments => {
        return dispatch(receiveComments(comments, postId));
    })
}

export const createComment = comment => dispatch => {
    return commentAPIUtil.createComment(comment).then( comment => {
        return dispatch(receiveComment(comment));
    })
}

export const updateComment = comment => dispatch => {
    return commentAPIUtil.updateComment(comment).then( comment => {
        return dispatch(receiveComment(comment));
    })
}

export const deleteComment = commentId => dispatch => {
    return commentAPIUtil.deleteComment(commentId).then( () => {
        return dispatch(removeComment(commentId));
    })
}