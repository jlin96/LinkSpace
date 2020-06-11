import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index';

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
})

export default connect(null, mapDispatchToProps)(PostIndex);