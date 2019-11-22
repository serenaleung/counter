import React, { Component } from 'react';
import Title from './title';
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
      <Title />
    </nav>
  );
};

export default NavBar;
