import React, { useState, useEffect } from 'react';
import { Collapse } from '@blueprintjs/core';

export default function Filter(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [clicked, setClicked] = useState(null);
  const sizes = ['XS', 'S', 'M', 'L', 'Xl', 'XXL'];
  let classes = ['filterSizeButton'];
  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const getSizeClasses = (i) => {
    let sizeClasses = 'filterSizeButton ';
    if (clicked === i) {
      if (sizeClasses.includes('filterSizeButtonClicked')) {
        console.log('true, i', i);
        return classes;
      } else {
        console.log('false, i', i);
        return (sizeClasses += 'filterSizeButtonClicked');
      }
    } else {
      console.log('all else, i', i);
      return classes;
    }
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
            <input
              type='button'
              value={size}
              className={getSizeClasses(i)}
              key={i}
              onClick={() => setClicked(i)}
            />
          ))}
        </div>
      </Collapse>
    </div>
  );
}
