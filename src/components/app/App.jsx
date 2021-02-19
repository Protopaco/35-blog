import React from 'react';
import PostContainer from '../../containers/PostContainer';
import PostDetailsContainer from '../../containers/PostDetailsContainer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={(routerProps) => <PostContainer {...routerProps} />} />
        </Switch>
        <Switch>
          <Route
            exact path="/post/:id"
            render={(routerProps) => <PostDetailsContainer {...routerProps} />} />
        </Switch>
      </Router>
    </>
  );
}

