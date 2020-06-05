import React from 'react';
import Splash from './splash/splash';
import NewsFeed from './newsfeed/newsfeed'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={Splash} />
    <ProtectedRoute path="/" component={NewsFeed} />
  </div>
);

export default App;