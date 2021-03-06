import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from '../../actions/comment_actions'

const mapStateToProps = state => ({
    posts: state.entities.posts
})

const mapDispatchToProps = dispatch => ({
    fetchComments: (postId) => dispatch(fetchComments(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);