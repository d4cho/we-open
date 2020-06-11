import React, { Component } from 'react';
import logo from '../logo.svg';
import SearchBar from '../components/SearchBar/SearchBar';
import classes from './Home.module.css';
import PostsContainer from './PostsContainer';
import data from '../data.json';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({
      posts: data['posts']
    });
  }

  createPostHandler = () => {
    console.log('create post clicked');
    window.location = '/create-post';
  };

  render() {
    console.log(this.state);
    return (
      <div className={classes.parent}>
        <div className={classes.topbar}>
          <img src={logo} className={classes.topbarLogo} alt='logo' />
          <SearchBar />
          <button>login</button>
          <button onClick={this.createPostHandler}>create post</button>
        </div>
        <Route
          path='/'
          render={(props) => (
            <PostsContainer
              {...props}
              posts={this.state.posts}></PostsContainer>
          )}></Route>
      </div>
    );
  }
}

export default Home;
