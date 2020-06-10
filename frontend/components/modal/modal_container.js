import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    modal: state.ui.modal,
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);