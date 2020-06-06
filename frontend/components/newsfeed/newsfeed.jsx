import React from 'react';
import NewsfeedNav from './newsfeed_nav';

const Newsfeed = ({ currentUser, users, logout }) => {
  return (
    <div className="newsfeed">
      <NewsfeedNav currentUser={currentUser} users={users} logout={logout}/>
    </div>
  );
};

export default Newsfeed;