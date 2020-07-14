import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    timeAgo(time) {
        const currentTime = Date.now();
        let postTimeFormatted = new Date(time);
        const secs = ((currentTime - postTimeFormatted) / 1000);
        const mins = (secs / 60);
        const hours = (mins / 60);
        const days = (hours / 24);
        const weeks = (days / 7);
        const years = (weeks / 52);
        if (secs < 60) {
            return 'Just now';
        } else if (mins < 60) {
            return `${Math.floor(mins)}m`
        } else if (hours < 24) {
            return `${Math.floor(hours)}h`
        } else if (days < 7) {
            return `${Math.floor(days)}d`
        } else if (weeks < 52) {
            return `${Math.floor(weeks)}w`
        } else {
            return `${Math.floor(years)}y`
        }

    }

    render() {
        return (
            <div className="comment-wrapper">
                <Link to={`/users/${this.props.comment.author_id}`}><img className='comment-profile-pic' src={this.props.users[this.props.comment.author_id].profile_picture} /></Link>
                <div className='comment-like-wrapper'>
                    <div className='comment-content-wrapper'>
                        <Link to={`/users/${this.props.comment.author_id}`}>
                            <div className='comment-user-name'>{this.props.users[this.props.comment.author_id].first_name} {this.props.users[this.props.post.author_id].last_name}</div>
                        </Link>
                        <div className='comment-text'>{this.props.comment.body}</div>
                    </div>
                    <div className='comment-like-wrapper-btm'>
                        <div className='comment-like'>Like</div>
                        <FontAwesomeIcon className='comment-dot-divider' icon={faCircle} />
                        <span className='comment-time-ago'>{this.timeAgo(this.props.comment.created_at)}</span>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default CommentIndexItem;