import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updatePost } from '../../actions/post_actions';
import PostForm from './post_form';

class EditPostForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {currentUser, user, post, body, type, closeModal, action} = this.props
        return (
            <PostForm
                currentUser={currentUser}
                user={user}
                post={post}
                body={body}
                type={type}
                closeModal={closeModal}
                action={action}
            />
        )
    }
}

const mapStateToProps = state => {
    return ({
    currentUser: state.entities.users[state.session.currentUserId],
    user: state.entities.users[state.entities.currentPost.receiver_id],
    post: state.entities.currentPost,
    body: state.entities.currentPost.body,
    type: 'edit'
    })
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    action: (post) => dispatch(updatePost(post)),

})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);