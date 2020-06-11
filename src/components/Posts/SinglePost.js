import React from 'react';
import classes from './SinglePost.module.css';
import { Link } from 'react-router-dom';

const SinglePost = (props) => {
  console.log(props);

  return (
    <Link to={`/${props.userName}`}>
      <div className={classes.parent}>
        <div>{props.businessName}</div>
        <div>{props.title}</div>
        <div>
          {props.startDate} - {props.endDate}
        </div>
      </div>
    </Link>
  );
};

export default SinglePost;
