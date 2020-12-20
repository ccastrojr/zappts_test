import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/Home/SignIn';
import SignUp from '../pages/Home/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
