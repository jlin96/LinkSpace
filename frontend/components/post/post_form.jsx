import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faSortDown, faEllipsisH, faMapMarkerAlt, faUserAlt, faImages, faVideo } from "@fortawesome/free-solid-svg-icons";

class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            author_id: this.props.currentUser.id, 
            receiver_id: this.props.user.id, 
            body: this.props.body, 
            create_post_button: 'profile-create-post-button-text-n',
            post_photo: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitPost = this.submitPost.bind(this);
        this.userOrFriendWall = this.userOrFriendWall.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleChange (e) {
        if(this.props.type === 'create') {
            if (e.target.value.length > 0 || this.state.post_photo) {
                this.setState({ body: e.target.value, create_post_button: 'profile-create-post-button-text' });
            } else {
                this.setState({ body: e.target.value, create_post_button: 'profile-create-post-button-text-n' });
            }  
        } else {
            if ((e.target.value.length > 0 && e.target.value !== this.props.body) || this.state.post_photo) {
                this.setState({ body: e.target.value, create_post_button: 'profile-create-post-button-text' });
            } else {
                this.setState({ body: e.target.value, create_post_button: 'profile-create-post-button-text-n' });
            }  
        }
    }

    userOrFriendWall() {
        const full_name = this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className='profile-create-post-img-preview'/> : null;
        if(this.props.type === 'create') {
            if (this.props.user.id === this.props.currentUser.id) {
                return (
                    <>
                        <div className='profile-create-post-user'>
                            <img className='profile-create-post-user-pic' src={this.props.currentUser.profile_picture} />
                            <div className='profile-create-post-current-name'>
                                <span className='profile-create-post-name-text'>
                                    {full_name}
                                </span>
                                <button className='profile-create-post-privacy'>
                                    <FontAwesomeIcon className='profile-create-post-friend-icon' icon={faUserFriends} />
                                    <span className='profile-create-post-friends'>
                                        Friends
                                </span>
                                    <FontAwesomeIcon className='profile-create-post-arrow-down-icon' icon={faSortDown} />
                                </button>
                            </div>
                        </div>
                        <div className='profile-create-post-content'>
                            <textarea
                                placeholder="What's on your mind?"
                                className='profile-create-post--actual-text'
                                name={this.state.body}
                                onChange={this.handleChange}
                            ></textarea>
                            <div className='profile-create-post-img-wrapper'>
                                {preview}
                            </div>
                        </div>
                    </>
                )
            } else {
                const friendWallPost = `Write something to ${this.props.user.first_name}...`
                return (
                    <>
                        <div className='profile-create-post-user'>
                            <img className='profile-create-post-user-pic' src={this.props.currentUser.profile_picture} />
                            <div className='profile-create-post-current-name'>
                                <span className='profile-create-post-name-text'>
                                    {full_name}
                                </span>
                            </div>
                        </div>
                        <div className='profile-create-post-content'>
                            <textarea
                                placeholder={friendWallPost}
                                className='profile-create-post--actual-text'
                                name={this.state.body}
                                onChange={this.handleChange}
                            ></textarea>
                            <div className='profile-create-post-img-wrapper'>
                                {preview}
                            </div>
                        </div>
                    </>
                )
            }
        } else {
            return (
                <>
                    <div className='profile-create-post-user'>
                        <img className='profile-create-post-user-pic' src={this.props.currentUser.profile_picture} />
                        <div className='profile-create-post-current-name'>
                            <span className='profile-create-post-name-text'>
                                {full_name}
                            </span>
                            <button className='profile-create-post-privacy'>
                                <FontAwesomeIcon className='profile-create-post-friend-icon' icon={faUserFriends} />
                                <span className='profile-create-post-friends'>
                                    Friends
                                </span>
                                <FontAwesomeIcon className='profile-create-post-arrow-down-icon' icon={faSortDown} />
                            </button>
                        </div>
                    </div>
                    <div className='profile-create-post-content'>
                        <textarea
                            value={this.state.body}
                            className='profile-create-post--actual-text'
                            name={this.state.body}
                            onChange={this.handleChange}
                        ></textarea>
                        <div className='profile-create-post-img-wrapper'>
                            {preview}
                        </div>
                    </div>
                </>
            )
        }
        
    }

    submitPost(e) { 
        e.preventDefault();
        if (this.state.post_photo) {
            const formData = new FormData();
            formData.append('post[body]', this.state.body);
            formData.append('post[post_photo]', this.state.post_photo);
            formData.append('post[author_id]', this.state.author_id);
            formData.append('post[receiver_id]', this.state.receiver_id);
            this.props.photoPost(formData);
            this.props.closeModal();
        } else {
            if (this.props.type === 'create') {
                const createdPost = { body: this.state.body, author_id: this.state.author_id, receiver_id: this.state.receiver_id }
                if (this.state.body.length > 0) {
                    this.props.action(createdPost);
                    this.props.closeModal();
                }
            } else {
                const updatedPost = { id: this.props.post.id, body: this.state.body, author_id: this.state.author_id, receiver_id: this.state.receiver_id }
                if (this.state.body.length > 0 && e.target.value !== this.props.body) {
                    this.props.action(updatedPost);
                    this.props.closeModal();
                }
            }
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ post_photo: file, photoUrl: fileReader.result, create_post_button: 'profile-create-post-button-text' });
        }   
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render () {
        return (
            <>
                <div className='profile-create-post-modal-wrapper'>
                    <div className='profile-create-post-modal-top'>
                        <span className='profile-create-post-modal-top-text'>Create Post</span>
                        <div className='profile-create-post-modal-close' onClick={this.props.closeModal}>
                            <span className='profile-create-post-modal-x'>x</span>
                        </div>
                    </div>
                    {this.userOrFriendWall()}
                    <div className='profile-create-post-add-post'>
                        <span className='profile-create-post-add-post-text'>
                            Add to Your Post
                        </span>
                        
                        <div className='profile-create-post-add-post-icons'>
                            <div className='profile-create-post-add-post-icons-wrapper'>
                                <FontAwesomeIcon className='profile-create-post-video-icon' icon={faVideo} />
                            </div>
                            <label className='profile-create-post-add-post-icons-wrapper'>
                                <input type="file" onChange={this.handleFile} className='profile-create-post-file-upload'/>
                                <FontAwesomeIcon className='profile-create-post-images-icon' icon={faImages} />
                            </label>
                            <div className='profile-create-post-add-post-icons-wrapper'>
                                <FontAwesomeIcon className='profile-create-post-user-alt-icon' icon={faUserAlt} />
                            </div>
                            <div className='profile-create-post-add-post-icons-wrapper'>
                                <FontAwesomeIcon className='profile-create-post-map-marker-icon' icon={faMapMarkerAlt} />
                            </div>
                            <div className='profile-create-post-add-post-icons-wrapper'>
                                <FontAwesomeIcon className='profile-create-post-dots-icon' icon={faEllipsisH} />
                            </div>
                        </div>
                    </div>
                    <div className='profile-create-post-button' onClick={this.submitPost}>
                        <div className={this.state.create_post_button}>
                            Post
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PostForm;