import React from 'react';

export default function Filter() {
  return (
    <div className='aside'>
      <h3>Size</h3>
      <div className='row'>
        <span className='filterSizeButton'>XS</span>
        <span className='filterSizeButton'>S</span>
        <span className='filterSizeButton'>M</span>
        <span className='filterSizeButton'>L</span>
      </div>
      <div className='row'>
        <span className='filterSizeButton'>XL</span>
        <span className='filterSizeButton'>XXL</span>
      </div>
    </div>
  );
}
