import { connect } from 'react-redux';
import Profile from './profile';
import { updateUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.currentUserId
})

const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);