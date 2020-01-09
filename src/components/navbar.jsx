import React, { Component } from 'react';
const NavBar = ({ totalCounters }) => {
  console.log('Navbar - rendered');

  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Navbar{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
      <form className='form-inline'>
        <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
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
