import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faCamera, faHatWizard, faStickyNote } from "@fortawesome/free-solid-svg-icons";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comment_text_color: 'profile-main-post-comment-write', body: ''}
        this.changeTextColor = this.changeTextColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeTextColor(e) {
        this.setState({ comment_text_color: 'profile-main-post-comment-write profile-main-post-comment-write-color' })
    }

    handleChange(e) {
        this.setState({body: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = {body: this.state.body, post_id: this.props.post.id, author_id: this.props.currentUser};
        this.props.createComment(comment);
        this.setState({body: ''});
    }

    render() {
        return (
            <form className='profile-main-post-create-comments' onSubmit={this.handleSubmit}>
                <img className='profile-main-post-current-user-comment-image' src={this.props.users[this.props.currentUser].profile_picture} />
                <div className='profile-main-post-comment-container'>
                    <input className={this.state.comment_text_color} value={this.state.body} type="text" placeholder="Write a comment..." onFocus={this.changeTextColor} onChange={this.handleChange} />
                    <div className='profile-main-post-icon-container'>
                        <FontAwesomeIcon className='profile-main-post-comment-icons' icon={faSmile} />
                        <FontAwesomeIcon className='profile-main-post-comment-icons' icon={faCamera} />
                        <FontAwesomeIcon className='profile-main-post-comment-icons' icon={faHatWizard} />
                        <FontAwesomeIcon className='profile-main-post-comment-icons' icon={faStickyNote} />
                    </div>
                </div>
            </form>
        )
    }
}

export default CommentForm;