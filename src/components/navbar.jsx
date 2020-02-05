import React, { Component } from 'react';
import Search from './search';
const NavBar = ({ totalCounters, onChange, searchQuery }) => {
  // console.log('Navbar - rendered');

  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Navbar{' '}
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
