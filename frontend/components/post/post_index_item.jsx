import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCircle, faUserFriends, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faCommentAlt, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import CommentForm from '../comments/comment_form';
import CommentIndexContainer from '../comments/comment_index_container';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.selfPostOrFriend = this.selfPostOrFriend.bind(this);
        this.timeAgo = this.timeAgo.bind(this);
        this.setCurrentPost = this.setCurrentPost.bind(this);
        this.state = {post: this.props.post}
    }

    componentDidMount() {
        this.props.fetchComments(this.props.post.id);
    }
    
    selfPostOrFriend() {
        const {users, post} = this.props
        if(this.props.post.author_id === this.props.post.receiver_id) {
            const full_name = users[post.author_id].first_name + ' ' + users[post.author_id].last_name;
            return (
                <div className='profile-main-post-user-name-nf'>
                    <Link to={`/users/${this.props.post.author_id}`}>{full_name}</Link>
                </div>
            )
        } else {
            const a_full_name = users[post.author_id].first_name + ' ' + users[post.author_id].last_name;
            const r_full_name = users[post.receiver_id].first_name + ' ' + users[post.receiver_id].last_name;
            return (
                <div className='profile-main-post-user-name-f'>
                    <Link to={`/users/${this.props.post.author_id}`}><span className='profile-main-post-user-name-fa'>{a_full_name}</span></Link>
                    <FontAwesomeIcon className='profile-main-post-user-name-f-icon' icon={faCaretRight} />
                    <Link to={`/users/${this.props.post.receiver_id}`}><span className='profile-main-post-user-name-fr'>{r_full_name}</span></Link>
                </div>
            )
        }
    }

    timeAgo(time) {
        const currentTime = Date.now();
        let postTimeFormatted = new Date(time);
        const secs = ((currentTime - postTimeFormatted) / 1000);
        const mins = (secs/ 60);
        const hours = (mins/ 60);
        const hoursMin = (hours - Math.floor(hours)) * 60;
        if(secs < 60) {
            return 'Just now';
        } else if (mins < 60) {
            return `${Math.floor(mins)} mins`
        } else if (hours < 24) {
            return `${Math.floor(hours)} hrs`
        } 

        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const newDate = new Date();
        const dateArr = postTimeFormatted.toString().split(' ');
        if (postTimeFormatted.getMonth() - newDate.getMonth() < 1) {
            const monthNum = postTimeFormatted.getMonth();
            const dayNum = postTimeFormatted.getDate();
            let hourNum = postTimeFormatted.getHours();
            let minuteNum = postTimeFormatted.getMinutes();
            let amOrpm;
            if (minuteNum < 10) {
                minuteNum = minuteNum.toString();
                minuteNum = '0' + minuteNum;
            }
            if (hourNum < 12) {
                amOrpm = 'AM';
            } else {
                hourNum = hourNum - 12;
                amOrpm = 'PM';
            }
            return `${month[monthNum]} ${dayNum} at ${hourNum}:${minuteNum} ${amOrpm}`
        } else if (dateArr[3] === newDate.getFullYear().toString()) {
            const monthNum = postTimeFormatted.getMonth();
            const dayNum = postTimeFormatted.getDate();

            return `${month[monthNum]} ${dayNum}`
        } else {
            const monthNum = postTimeFormatted.getMonth();
            const dayNum = postTimeFormatted.getDate();

            return `${month[monthNum]} ${dayNum}, ${dateArr[3]}`
        }
    }

    setCurrentPost() {
        this.props.currentPost(this.props.post)
    }

    render () {
        if(Object.values(this.props.users).length === 1 || this.props.post === undefined || this.props.users === undefined) {
            return null;
        }
        const { currentUser, createComment, fetchComments, post, users } = this.props;
        return (
            <div className='profile-main-post-li' onMouseEnter={this.setCurrentPost}>
                <div className='profile-main-post-li-r1-self'>
                    <Link to={`/users/${this.props.post.author_id}`}><img className='profile-main-post-user-pic' src={this.props.users[this.props.post.author_id].profile_picture} /></Link>
                    <div className='profile-main-post-user-name-wrapper'> 
                        {this.selfPostOrFriend()}
                        <div className='profile-main-post-time-wrapper'>
                            <span className='profile-main-post-time'>{this.timeAgo(this.props.post.created_at)}</span>
                            <FontAwesomeIcon className='profile-main-post-time-icon' icon={faCircle} />
                            <div className='profile-main-post-time-icon-friends-wrapper'>
                                <FontAwesomeIcon className='profile-main-post-time-icon-friends' icon={faUserFriends} />
                            </div>
                        </div>
                    </div>
                    <button className='profile-main-post-edit-post' onClick={() => this.props.openModal("edit post")}>
                        <FontAwesomeIcon className='profile-main-post-edit-post-icon' icon={faEllipsisH} />
                    </button>
                </div>
                
                <div className='profile-main-post-actual-text-wrapper'>
                    <div className="profile-main-post-actual-text">{this.props.post.body}</div>
                </div>
                <img className="profile-main-post-photo" src={this.props.post.post_photo} />

                <div className='profile-main-post-top-divider'></div>

                <div className='profile-main-post-like-comment-share'>
                    <div className='profile-main-post-buttons'>
                        <FontAwesomeIcon className='profile-main-post-buttons-icons' icon={faThumbsUp} />
                        <span className='profile-main-post-buttons-text' >Like</span>
                    </div>
                    <div className='profile-main-post-buttons'>
                        <FontAwesomeIcon className='profile-main-post-buttons-icons' icon={faCommentAlt} />
                        <span className='profile-main-post-buttons-text' >Comment</span>
                    </div>
                    <div className='profile-main-post-buttons'>
                        <FontAwesomeIcon className='profile-main-post-buttons-icons' icon={faShareSquare} />
                        <span className='profile-main-post-buttons-text' >Share</span>
                    </div>
                </div>

                <div className='profile-main-post-bottom-divider'></div>

                <CommentIndexContainer post={post} users={users}/>

                <CommentForm currentUser={currentUser} createComment={createComment} post={post} users={users}/>
            </div>
        )
    }
}

export default PostIndexItem;