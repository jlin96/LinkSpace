import React from 'react'
import ProfileHeader from './profile_header'
import ProfileMain from './profile_main'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.userPost(this.props.match.params.userId);
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        // debugger
        if(prevProps.location.pathname !== this.props.location.pathname) {
            this.props.userPost(this.props.match.params.userId);
        }

    }

    render() {
        if (this.props.user === undefined) {
            return null;
        }
        const { user, currentUser, posts, users, updateUser} = this.props
        return (
            <>
                <ProfileHeader user={user} currentUser={currentUser} updateUser={updateUser} users={users} />
                <div className='profile-body-background'>
                    <ProfileMain user={user} currentUser={currentUser} posts={posts} users={users}/>
                </div>
            </>
        )
    }
}

export default Profile;