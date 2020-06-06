import React from 'react';
import Splash from './splash/splash';
import NewsFeedContainer from './newsfeed/newsfeed_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={Splash} />
    <ProtectedRoute path="/" component={NewsFeedContainer} />
  </div>
);

export default App;