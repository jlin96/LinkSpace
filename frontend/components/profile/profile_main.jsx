import React from 'react';
import ProfilePost from '../post/profile_post_container';

class ProfileMain extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const {user, currentUser, users, posts} = this.props
        return (
            <div className='profile-body-wrapper'>
                <div className='profile-body-intro'>
                    Intro
                </div>
                <div className='profile-body-post-container'>
                    <ProfilePost user={user} currentUser={currentUser} users={users} posts={posts}/>
                </div>
            </div>
        )
    }
}

export default ProfileMain;