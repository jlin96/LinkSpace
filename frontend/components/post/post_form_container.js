import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = state => ({
    type: 'create',
    body: '',
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    action: post => dispatch(createPost(post)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);