import React from 'react';

import classes from './SearchBar.module.css';

const SearchBar = (props) => {
  return (
    <form>
      <input className={classes.input} type='text' placeholder='Search...' />
    </form>
  );
};

export default SearchBar;
