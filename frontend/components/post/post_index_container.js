import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),

})

export default connect(null, mapDispatchToProps)(PostIndex);