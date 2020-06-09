import React from 'react'
import ProfileHeader from './profile_header'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <ProfileHeader user={this.props.user} currentUser={this.props.currentUser} updateUser={this.props.updateUser} />
                <div className='profile-body-background'>
                    <div className='profile-body-wrapper'>
                        <div className='profile-body-intro'>
                            Intro
                        </div>
                        <div className='profile-body-post-container'>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;