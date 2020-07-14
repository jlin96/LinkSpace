import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { currentPost } from '../../actions/post_actions';
import { createComment, fetchComments, deleteComment } from '../../actions/comment_actions'
import PostIndex from './post_index';

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    currentPost: post => dispatch(currentPost(post)),
    createComment: comment => dispatch(createComment(comment)),
    fetchComments: postId => dispatch(fetchComments(postId)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
})

export default connect(null, mapDispatchToProps)(PostIndex);