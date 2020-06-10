import { connect } from 'react-redux';
import Profile from './profile';
import { updateUser, fetchUsers } from '../../actions/user_actions'
import { userPost } from '../../actions/post_actions'

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.currentUserId,
    posts: state.entities.posts,
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    userPost: userId => dispatch(userPost(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);