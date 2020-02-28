import React, { useState } from 'react';
import { Collapse } from '@blueprintjs/core';

export default function Filter(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [clicked, setClicked] = useState(false);
  const sizes = ['XS', 'S', 'M', 'L', 'Xl', 'XXL'];

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClassClick = () => {
    setClicked(!clicked);
    getSizeClasses();
  };

  const getSizeClasses = i => {
    let sizeClasses = 'filterSizeButton ';
    sizeClasses += clicked ? 'filterSizeButtonClicked' : '';
    return sizeClasses;
  };

  return (
    <div className='aside'>
      <div className='row'>
        <button className='bp3-button bp3-minimal' onClick={handleOpenClick}>
          <h3>Size</h3>
          <span className='bp3-icon bp3-icon-plus justifyEnd'></span>
        </button>
      </div>
      <Collapse isOpen={!isOpen}>
        <div className='row'>
          {sizes.map((size, i) => (
            <div
              className={getSizeClasses()}
              key={i}
              onClick={handleClassClick}
            >
              {size}
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
}
