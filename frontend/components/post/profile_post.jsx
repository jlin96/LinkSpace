import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faImages, faFlag, faUserTag, faLaughBeam } from "@fortawesome/free-solid-svg-icons";
import PostIndexContainer from './post_index_container';
import { Link } from 'react-router-dom'

class ProfilePost extends React.Component {
    constructor(props) {
        super(props);
        this.userOrFriendWall = this.userOrFriendWall.bind(this);
    }

    userOrFriendWall() {
        const friendWall = `Write something to ${this.props.user.first_name}...`
        if(this.props.currentUser === this.props.user.id) {
            return (
                <>
                    <div className='profile-create-post-r1'>
                        <Link to={`/users/${this.props.currentUser}`}>
                            <img className="profile-create-post-img" src={window.headshot} />
                        </Link>
                        <button className="profile-create-post-btn" onClick={() => this.props.openModal("create post")}> 
                            What's on your mind?
                        </button>
                    </div>
                    <div className='profile-create-post-divider'></div>
                    <div className='profile-create-post-r2'>
                        <div className='profile-create-icon-wrapper'>
                            <FontAwesomeIcon className='profile-create-icon profile-create-post-live-video' icon={faVideo} />
                            <span className='profile-create-post-text'>
                                Live Video
                            </span>
                        </div>
                        <div className='profile-create-icon-wrapper'>
                            <FontAwesomeIcon className='profile-create-icon profile-create-post-photo-video' icon={faImages} />
                            <span className='profile-create-post-text'>
                                Photo/Video
                            </span>
                        </div>
                        <div className='profile-create-icon-wrapper'>
                            <FontAwesomeIcon className='profile-create-icon profile-create-post-life-event' icon={faFlag} />
                            <span className='profile-create-post-text'>
                                Life Event
                            </span>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='profile-create-post-r1'>
                        <Link to={`/users/${this.props.currentUser}`}>
                            <img className="profile-create-post-img" src={window.headshot} />
                        </Link>
                        <button className="profile-create-post-btn" onClick={() => this.props.openModal("create post")}>
                            {friendWall}
                        </button>
                    </div>
                    <div className='profile-create-post-divider'></div>
                    <div className='profile-create-post-r2'>
                        <div className='profile-create-icon-wrapper'>
                            <FontAwesomeIcon className='profile-create-icon profile-create-post-photo-video' icon={faImages} />
                            <span className='profile-create-post-text'>
                                Photo/Video
                            </span>
                        </div>
                        <div className='profile-create-icon-wrapper'>
                            <FontAwesomeIcon className='profile-create-icon profile-create-post-tag-friends' icon={faUserTag} />
                            <span className='profile-create-post-text'>
                                Tag Friends
                            </span>
                        </div>
                        <div className='profile-create-icon-wrapper'>
                            <FontAwesomeIcon className='profile-create-icon profile-create-post-feeling-activity' icon={faLaughBeam} />
                            <span className='profile-create-post-text'>
                                Feeling/Activity
                            </span>
                        </div>
                    </div>
                </>
            )
        }
    }


    render() {
        if (this.props.user === undefined) {
            return null;
        }
        const {user, currentUser, users, posts} = this.props;
        return (
            <>
                <div className='profile-create-post-wrapper'>
                    {this.userOrFriendWall()}
                </div>
                <PostIndexContainer user={user} currentUser={currentUser} users={users} posts={posts}/>
            </>
        )
    }
}

export default ProfilePost;