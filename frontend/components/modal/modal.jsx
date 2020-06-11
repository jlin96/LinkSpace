import React from 'react';
import PostFormContainer from '../post/post_form_container';
import EditPostFormContainer from '../post/post_form_edit_container';

function Modal({ modal, closeModal, user, currentUser }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'create post':
            component = <PostFormContainer user={user} currentUser={currentUser}/>;
            break;

        case 'edit post':
            component = <EditPostFormContainer />
            break;
            
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal;