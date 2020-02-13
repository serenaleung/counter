import React from 'react';
import Search from './search';
const NavBar = ({ totalCounters, onChange, searchQuery }) => {
  return (
    <nav className='header'>
      <a href='#'>
        LOGO{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
      <form className='form-inline'>
        <Search onChange={onChange} value={searchQuery}></Search>
        <button
          className='btn btn-outline-secondary my-2 my-sm-0'
          type='submit'
        >
          Search
        </button>
        <a href='#'>Cart (0)</a>
      </form>
    </nav>
  );
};

export default NavBar;
