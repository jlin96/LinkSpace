import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createPost: post => dispatch(createPost(post))
})

export default connect(null, mapDispatchToProps)(PostForm);