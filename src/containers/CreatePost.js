import React, { Component } from 'react';

class CreatePost extends Component {
  closeButtonHandler = () => {
    window.location = '/';
  };

  render() {
    return (
      <div>
        <div>create post page</div>
        <button onClick={this.closeButtonHandler}>close</button>
      </div>
    );
  }
}

export default CreatePost;
