import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faEye, faSearch, faPen } from "@fortawesome/free-solid-svg-icons";
class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.addBio = this.addBio.bind(this);
        this.state = {
            clickedTimeline: true,
            clickedAbout: false,
            clickedFriends: false,
            clickedPhotos: false,
            clickedVideos: false,
            clickedArchive: false,
            profile_components_li_clicked: 'profile-primary-bottom',
            profile_components_inner_clicked: 'profile-secondary-bottom',
            profile_components_li: 'profile-main-component',
            profile_components_inner: 'profile-main-component-inner',
            timeline_components_text: 'profile-main-component-text',
            about_components_text: 'profile-main-component-text fix-about-text',
            friends_components_text: 'profile-main-component-text fix-friends-text',
            photos_components_text: 'profile-main-component-text fix-photos-text',
            archive_components_text: 'profile-main-component-text fix-archive-text',
            more_components_text: 'profile-main-component-text',
            currentSelect: 'timeline'
        }
        this.swapClick = this.swapClick.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }

    addBio() {
        if(this.props.user.bio !== '') {
            return (
                <span className='profile-bio-exist'>
                    {this.props.user.bio}
                </span>
            )
        } else if (this.props.user.id === this.props.currentUser){
            return (
                <span className='profile-bio-nonexist'>
                    Add Bio
                </span>
            )
        }
    }

    videoOrArchive() {
        if (this.props.user.id === this.props.currentUser) {
            return (
                <li className={this.state.currentSelect === 'archive' ? this.state.profile_components_li_clicked : this.state.profile_components_li} onClick={this.swapClick('archive')}>
                    <button
                        className={this.state.currentSelect === 'archive' ? this.state.profile_components_inner_clicked : this.state.profile_components_inner}
                        >
                        <span className={this.state.archive_components_text}>
                            Archive
                        </span>
                    </button>
                </li>
            )
        } else { 
            return (
                <li className={this.state.currentSelect === 'video' ? this.state.profile_components_li_clicked : this.state.profile_components_li} onClick={this.swapClick('video')}>
                        <button
                        className={this.state.currentSelect === 'archive' ? this.state.profile_components_inner_clicked : this.state.profile_components_inner}
                        >
                        <span className={this.state.archive_components_text}> 
                            Video
                        </span>
                    </button>
                </li>
            )
        }
    }

    editProfile() {
        if (this.props.user.id === this.props.currentUser) {
            return (
                <div className='profile-components-edit-profile-wrapper'>
                    <div className='profile-edit-profile-text-wrapper'>
                        <FontAwesomeIcon className='profile-edit-profile-icon' icon={faPen} />
                        <span className='profile-edit-profile-text'>
                            Edit Profile
                        </span>
                    </div>
                </div>
            )
        }
    }

    swapClick(newSelected) {
        return e => {
            if (newSelected !== this.state.currentSelect) {
                this.setState({currentSelect: newSelected})
            }
        }
    }

    render() {
        const { first_name, last_name } = this.props.user;
        const full_name = first_name + ' ' + last_name;
        return(
            <>
                <header className='profile-header'>
                    <div className='profile-cover-photo'>
                        <div className='profile-picture-border'>
                            <img src={window.headshot} className="profile-profile-picture" />
                        </div>
                    </div>
                </header>
                <div className='profile-user-name-bio'>
                    <div className='profile-user-name-bio-wrapper'>
                        <span className='profile-user-full-name'>
                            {/* Jes Se */}
                            {full_name}
                        </span>
                        {this.addBio()}
                    </div>
                </div>

                <div className="profile-divider"></div>

                <div className="profile-time-components-wrapper">
                    <ul className="profile-components-ul">
                        <li className={this.state.currentSelect === 'timeline' ? this.state.profile_components_li_clicked : this.state.profile_components_li} onClick={this.swapClick('timeline')}>
                            <button
                                className={this.state.currentSelect === 'timeline' ? this.state.profile_components_inner_clicked : this.state.profile_components_inner}
                            >
                                <span className={this.state.timeline_components_text}>
                                    Timeline
                                </span>
                            </button>
                        </li>
                        <li className={this.state.currentSelect === 'about' ? this.state.profile_components_li_clicked : this.state.profile_components_li} onClick={this.swapClick('about')}>
                            <button
                                className={this.state.currentSelect === 'about' ? this.state.profile_components_inner_clicked : this.state.profile_components_inner}
                            >
                                <span className={this.state.about_components_text}>
                                    About
                                </span>
                            </button>
                        </li>
                        <li className={this.state.currentSelect === 'friends' ? this.state.profile_components_li_clicked : this.state.profile_components_li} onClick={this.swapClick('friends')}>
                            <button
                                className={this.state.currentSelect === 'friends' ? this.state.profile_components_inner_clicked : this.state.profile_components_inner}
                            >
                                <span className={this.state.friends_components_text}>
                                    Friends
                                </span>
                            </button>
                        </li>
                        <li className={this.state.currentSelect === 'photos' ? this.state.profile_components_li_clicked : this.state.profile_components_li} onClick={this.swapClick('photos')}>
                            <button
                                className={this.state.currentSelect === 'photos' ? this.state.profile_components_inner_clicked : this.state.profile_components_inner}
                            >
                                <span className={this.state.photos_components_text}>
                                    Photos
                                </span>
                            </button>
                        </li>
                        {this.videoOrArchive()}
                        <li className={this.state.currentSelect === 'more' ? this.state.profile_components_li_clicked : this.state.profile_components_li} onClick={this.swapClick('more')}>
                            <button
                                className={this.state.currentSelect === 'more' ? this.state.profile_components_inner_clicked : this.state.profile_components_inner}
                            >
                                <span className={this.state.more_components_text}>
                                    More
                                </span>
                            </button>
                        </li>
                    </ul>

                    <div className='profile-components-right-side'>
                        <div className='profile-components-wrapper'>
                            {this.editProfile()}
                            <div className='profile-components-button-component'>
                                <FontAwesomeIcon className='profile-components-button-icon' icon={faEye} />
                            </div>
                            <div className='profile-components-button-component'>
                                <FontAwesomeIcon className='profile-components-button-icon' icon={faSearch} />
                            </div>
                            <div className='profile-components-button-component'>
                                <FontAwesomeIcon className='profile-components-button-icon' icon={faEllipsisH} />
                            </div>

                        </div>
                    </div>
                </div>


                <div className="profile-body">

                </div>
            </>

        )
    }
}

export default Profile