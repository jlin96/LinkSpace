import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faEye, faSearch, faPen, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
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
            currentSelect: 'timeline',
            bio_class: 'profile-bio-nonexist',
            edit_bio_class: 'profile-edit-bio-wrapper hidden',
            bio_characters_left: 101 - this.props.user.bio.length,
            edit_bio_save_button: 'edit-bio-save-button-nvalid',
            bio_actual_edit_class: 'profile-actual-edit',
            user_bio_text: 'profile-bio-exist',
            textarea_class: 'bio-textarea',
            user: this.props.user,
        }
        this.swapClick = this.swapClick.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.add_bio_edit_form = this.add_bio_edit_form.bind(this);
        this.countCharacters = this.countCharacters.bind(this);
        this.cancel_bio_edit = this.cancel_bio_edit.bind(this);
        this.submit_bio = this.submit_bio.bind(this);
        this.edit_textarea_text = this.edit_textarea_text.bind(this);
    }

    add_bio_edit_form(e) {
        if (this.props.user.bio !== '') {
            this.setState({ 
                bio_actual_edit_class: 'profile-actual-edit hidden', 
                user_bio_text: 'profile-bio-exist hidden', 
                edit_bio_class: 'profile-edit-bio-wrapper',
                textarea_class: 'bio-textarea bio-textarea-text-color' 
            })
        } else {
            this.setState({ 
                bio_class: 'profile-bio-nonexist hidden', 
                edit_bio_class: 'profile-edit-bio-wrapper',
                textarea_class: 'bio-textarea bio-textarea-text-color'
            })
        }
    }

    countCharacters(field) {
        return e => {
            if (this.props.user.bio !== '') {
                let newUser = Object.assign({}, this.state.user);
                newUser[field] = e.target.value;
                if (101 - e.target.value.length > 0 && 101 - e.target.value.length <= 101 && this.props.user.bio !== e.target.value) {
                    this.setState({ 
                        bio_characters_left: 101 - e.target.value.length, 
                        edit_bio_save_button: 'edit-bio-save-button-valid', 
                        user: newUser });
                } else {
                    this.setState({ 
                        bio_characters_left: 101 - e.target.value.length, 
                        edit_bio_save_button: 'edit-bio-save-button-nvalid' });
                }
            } else {
                let newUser = Object.assign({}, this.state.user);
                newUser[field] = e.target.value;
                if (101 - e.target.value.length > 0 && 101 - e.target.value.length < 101) {
                    this.setState({ bio_characters_left: 101 - e.target.value.length, edit_bio_save_button: 'edit-bio-save-button-valid', user: newUser });
                } else {
                    this.setState({ bio_characters_left: 101 - e.target.value.length, edit_bio_save_button: 'edit-bio-save-button-nvalid' });
                }
            }
        }
    }

    cancel_bio_edit(e) {
        if (this.props.user.bio !== '') {
            this.setState({ 
                bio_characters_left: 101 - this.props.user.bio.length, 
                user_bio_text: 'profile-bio-exist', 
                bio_actual_edit_class: 'profile-actual-edit', 
                edit_bio_class: 'profile-edit-bio-wrapper hidden', 
                edit_bio_save_button: 'edit-bio-save-button-nvalid'
            })
        } else {
            this.setState({ 
                bio_characters_left: 101, 
                edit_bio_save_button: 'edit-bio-save-button-nvalid', 
                bio_class: 'profile-bio-nonexist', 
                edit_bio_class: 'profile-edit-bio-wrapper hidden'
            })
        }
    }

    submit_bio(e) {
        if (this.state.edit_bio_save_button === 'edit-bio-save-button-valid') {
            this.props.updateUser(this.state.user);
            if(this.props.user.bio !=='') {
                this.setState({ user_bio_text: 'profile-bio-exist', bio_characters_left: 101 - this.state.user.bio.length, bio_actual_edit_class: 'profile-actual-edit', edit_bio_class: 'profile-edit-bio-wrapper hidden', edit_bio_save_button: 'edit-bio-save-button-nvalid', textarea_class: 'bio-textarea' })
            } else {
                this.setState({ bio_characters_left: 101, edit_bio_save_button: 'edit-bio-save-button-nvalid', bio_class: 'profile-bio-nonexist', edit_bio_class: 'profile-edit-bio-wrapper hidden', textarea_class: 'bio-textarea' })
            }
        }
    }

    edit_textarea_text (e) {
        if (this.state.textarea_class === 'bio-textarea') {
            this.setState({ textarea_class: 'bio-textarea bio-textarea-text-color'})
        }
    }

    addBio() {
        if (this.props.user.bio !== '' && this.props.user.id === this.props.currentUser) {
            return (
                <>
                    <span className={this.state.user_bio_text}>
                        {this.props.user.bio}
                    </span>
                    <span className={this.state.bio_actual_edit_class} onClick={this.add_bio_edit_form}>
                        Edit
                    </span>
                    <div className={this.state.edit_bio_class}>
                        <textarea placeholder="Describe who you are" className={this.state.textarea_class} name={this.state.user.bio} defaultValue={ this.state.user.bio } onChange={this.countCharacters('bio')}></textarea>
                        <div className='bio-characters-text-wrapper'>
                            <span className='edit-bio-characters-text'>
                                {this.state.bio_characters_left} characters remaining
                            </span>
                        </div>
                        <div className='edit-bio-buttons-wrappers'>
                            <div className='edit-bio-icon-wrapper'>
                                <FontAwesomeIcon className='edit-bio-globe-icon' icon={faGlobeAmericas} />
                                <span className='edit-bio-globe-text'>
                                    Public
                                </span>
                            </div>

                            <div className='edit-bio-button-wrapper'>
                                <div className='edit-bio-button' onClick={this.cancel_bio_edit}>
                                    Cancel
                                </div>
                                <div className={this.state.edit_bio_save_button} onClick={this.submit_bio}>
                                    Save
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else if (this.props.user.id === this.props.currentUser){
            return (
                <>
                    <span className={this.state.bio_class} onClick={this.add_bio_edit_form}>
                        Add Bio
                    </span>
                    <div className={this.state.edit_bio_class}>
                        <textarea placeholder="Describe who you are" className='bio-textarea' name={this.state.bio} onChange={this.countCharacters('bio')}></textarea>
                        <div className='bio-characters-text-wrapper'>
                            <span className='edit-bio-characters-text'>
                                {this.state.bio_characters_left} characters remaining
                            </span>
                        </div>
                        <div className='edit-bio-buttons-wrappers'>
                            <div className='edit-bio-icon-wrapper'>
                                <FontAwesomeIcon className='edit-bio-globe-icon' icon={faGlobeAmericas} />
                                <span className='edit-bio-globe-text'>
                                    Public
                                </span>
                            </div>

                            <div className='edit-bio-button-wrapper'>
                                <div className='edit-bio-button' onClick={this.cancel_bio_edit}>
                                        Cancel
                                </div>
                                <div className={this.state.edit_bio_save_button} onClick={this.submit_bio}>
                                    Save
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            <span className={this.state.user_bio_text}>
                {this.props.user.bio}
            </span>
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