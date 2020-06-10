import React from 'react';
import PostFormContainer from '../post/post_form_container';

function Modal({ modal, closeModal, user, currentUser }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'create post':
            component = <PostFormContainer user={user} currentUser={currentUser}/>;
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