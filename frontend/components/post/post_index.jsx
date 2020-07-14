import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        if (this.props.user === undefined || this.props.posts === {} || this.props.posts === undefined) {
            return null;
        }
        // debugger
        const { user, currentUser, openModal, users, currentPost, createComment, fetchComments, deleteComment } = this.props
        const postIndexLi = Object.values(this.props.posts).reverse().map( (post, idx) => {
            return (
                <PostIndexItem 
                    key={idx} 
                    post={post} 
                    user={user} 
                    currentUser={currentUser} 
                    openModal={openModal}
                    fetchComments={fetchComments}
                    users={users}
                    currentPost={currentPost}
                    createComment={createComment}
                    deleteComment={deleteComment}
                />
            )
        })
        return (
            <ul className='profile-main-post-ul'>
                {postIndexLi}
            </ul>
        )
    }
}

export default PostIndex;