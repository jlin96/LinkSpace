import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import NavBar from "./navbar";

const mapStateToProps = state => ({
    currentUser: state.session.currentUserId,
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);