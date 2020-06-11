import React, { Component } from 'react';
import SinglePost from '../components/Posts/SinglePost';
import ExpandedPost from './ExpandedPost';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class PostsContainer extends Component {
  render() {
    console.log('jrt', this.props);
    const posts = this.props.posts.map((post, index) => {
      return (
        <div>
          <SinglePost
            address={post.address}
            body={post.body}
            businessName={post.businessName}
            endDate={post.endDate}
            pictures={post.pictures}
            startDate={post.startDate}
            title={post.title}
            userName={post.userName}
            key={index}
          />
          <Route
            path='/:userName'
            render={(props) => (
              <ExpandedPost
                {...props}
                address={post.address}
                body={post.body}
                businessName={post.businessName}
                endDate={post.endDate}
                pictures={post.pictures}
                startDate={post.startDate}
                title={post.title}
                userName={post.userName}
                key={index}
              />
            )}
          />
        </div>
      );
    });
    return <div>{posts}</div>;
  }
}

export default PostsContainer;
