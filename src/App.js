import React from 'react';
import Home from './containers/Home';
import CreatePost from './containers/CreatePost';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
      <Route path='/create-post' component={CreatePost} />
    </Router>
  );
}

export default App;
