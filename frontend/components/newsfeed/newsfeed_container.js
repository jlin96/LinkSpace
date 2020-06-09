import { connect } from "react-redux";
import { fetchUsers } from '../../actions/user_actions'
import Newsfeed from "./newsfeed";

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);