import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ProfilePost from './profile_post';

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
})

export default connect(null, mapDispatchToProps)(ProfilePost);