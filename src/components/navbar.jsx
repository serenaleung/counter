import React from 'react';
import Search from './search';

const NavBar = ({ totalCounters, onChange, searchQuery }) => {
  return (
    <nav className='bp3-navbar header'>
      <div className='bp3-navbar-group bp3-align-left'>
        <div className='logo bp3-minimal bp3-icon-shop'>
          <span className='paddingSides'>Majore</span>
          <span className='bp3-tag bp3-minimal'>{totalCounters} </span>
        </div>
      </div>
      <div className='bp3-navbar-group menuItems'></div>
      <div className='bp3-navbar-group'>
        {' '}
        <Search onChange={onChange} value={searchQuery}></Search>
        <button className='bp3-button bp3-minimal bp3-icon-shopping-cart'>
          (0)
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
