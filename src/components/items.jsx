import React, { Component } from 'react';

export default function Items() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm'>
          <img
            src='https://res.cloudinary.com/guess-img/image/upload/w_371,h_499,c_fill,g_auto/v1/NA/Style/ECOMM/01G5105348Z-G6Y1'
            alt='item1'
          />
          <p className='listItemTitle fontSizeSmaller'>Laurie Sweater Top</p>
          <p className='fontSizeSmaller'>138.00 CAD</p>
        </div>
        <div className='col-sm'>
          <img
            src='https://res.cloudinary.com/guess-img/image/upload/w_600,h_807,c_fill,g_auto/f_auto,q_auto/fl_strip_profile/v1/NA/Style/ECOMM/W93R61R1NW1-CLGM-ALT1'
            alt='item2'
          />
          <p className='listItemTitle fontSizeSmaller'>
            Alivia Asymmetrical Ribbed Sweater
          </p>
          <p className='fontSizeSmaller'>79.00 CAD</p>
        </div>
        <div className='col-sm'>
          <img
            src='https://res.cloudinary.com/guess-img/image/upload/w_600,h_807,c_fill,g_auto/f_auto,q_auto/fl_strip_profile/v1/NA/Style/ECOMM/W9RR00R1NN2-G61B'
            alt='item3'
          />
          <p className='listItemTitle fontSizeSmaller'>
            Pasha Cold-Shoulder Tie Blouse
          </p>
          <p className='fontSizeSmaller'>158.00 CAD</p>
        </div>
      </div>
    </div>
  );
}
