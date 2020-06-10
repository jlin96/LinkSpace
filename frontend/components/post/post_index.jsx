import React from 'react';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        if (this.props.user === undefined) {
            return null;
        }
        return (
            <div>
                hello its me postindex
            </div>
        )
    }
}

export default PostIndex;