import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './ExpandedPost.module.css';

class ExpandedPost extends Component {
  render() {
    const address = `${this.props.address.streetNumber} ${this.props.address.streetName}, ${this.props.address.city}, ${this.props.address.province}, ${this.props.address.postalCode}`;

    if (this.props.match.params.userName === this.props.userName) {
      return (
        <Link to={`/`}>
          <div className={classes.parent}>
            {/* <div>{this.props.businessName}</div>
            <div>{this.props.title}</div>
            <div>
              {this.props.startDate} - {this.props.endDate}
            </div> */}
            <div>{this.props.body}</div>
            <div>{address}</div>
            <div>image 1</div>
            <div>image 2</div>
          </div>
        </Link>
      );
    }
    return null;
  }
}

export default ExpandedPost;
