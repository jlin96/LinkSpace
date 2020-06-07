import React from 'react';
import NavBar from '../navbar/navbar';

const Newsfeed = ({ currentUser, users, logout }) => {
  return (
    <div className="newsfeed">
      <NavBar currentUser={currentUser} users={users} logout={logout}/>
    </div>
  );
};

export default Newsfeed;