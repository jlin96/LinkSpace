import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: this.props.posts}
    }

    render() {
        if(this.props.posts === undefined || this.props.post === undefined || this.props.users === undefined) {
            return null;
        }
        const {posts, post, users} = this.props

        if (posts[post.id].comments === undefined) return null;
        
        const commentLi = Object.values(this.state.posts[post.id].comments).map( (comment, index) => {
            return (
                <CommentIndexItem post={post} users={users} comment={comment} key={index}/>
            )
        })
        return (
            <ul className="post-comments-ul">
                {commentLi}
            </ul>
        )
    }
}

export default CommentIndex;