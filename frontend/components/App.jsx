import React from 'react';
import Splash from './splash/splash';
import NavBarContainer from './navbar/navbar_container';
import NewsFeedContainer from './newsfeed/newsfeed_container';
import ProfileContainer from './profile/profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={Splash} />
    <ProtectedRoute path="/" component={NavBarContainer}/>
    <ProtectedRoute exact path="/" component={NewsFeedContainer} />
    <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
  </div>
);

export default App;