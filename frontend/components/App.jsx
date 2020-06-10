import React from 'react';
import Splash from './splash/splash';
import NavBarContainer from './navbar/navbar_container';
import NewsFeedContainer from './newsfeed/newsfeed_container';
import ProfileContainer from './profile/profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={Splash} />
    <ProtectedRoute path="/" component={NavBarContainer}/>
    <ProtectedRoute exact path="/" component={NewsFeedContainer} />
    <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
    <Route path="/users/:userId" component={ModalContainer} />
  </div>
);

export default App;