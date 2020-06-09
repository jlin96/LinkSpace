import React from 'react';

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render () {
    return (
    <div className="newsfeed">
      <div>hello its newsfeed</div>
    </div>
    );
  }
};

export default Newsfeed;