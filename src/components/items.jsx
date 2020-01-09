import React, { Component, useState } from 'react';

export default function Items() {
  const [items, filteredItems] = useState([
    {
      link:
        'https://res.cloudinary.com/guess-img/image/upload/w_371,h_499,c_fill,g_auto/v1/NA/Style/ECOMM/01G5105348Z-G6Y1',
      name: 'Laurie Sweater Top',
      price: '138.00 CAD'
    },
    {
      link:
        'https://res.cloudinary.com/guess-img/image/upload/w_600,h_807,c_fill,g_auto/f_auto,q_auto/fl_strip_profile/v1/NA/Style/ECOMM/W93R61R1NW1-CLGM-ALT1',
      name: 'Alivia Asymmetrical Ribbed Sweater',
      price: '79.00 CAD'
    },
    {
      link:
        'https://res.cloudinary.com/guess-img/image/upload/w_600,h_807,c_fill,g_auto/f_auto,q_auto/fl_strip_profile/v1/NA/Style/ECOMM/W9RR00R1NN2-G61B',
      name: 'Pasha Cold-Shoulder Tie Blouse',
      price: '158.00 CAD'
    }
  ]);

  const handleChange = e => {
    if (e.target.value !== '') {
      let filteredItems = items.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        console.log('item , lc.includes(filter)', item, lc.includes(filter));
        return lc.includes(filter);
      });
    } else {
      let filteredItems = items;
      console.log('filteredItems', filteredItems);
      return filteredItems;
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <input onChange={handleChange} placeholder='Search'></input>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <img src={items[0].link} alt='item1' />
          <p className='listItemTitle fontSizeSmaller'>{items[0].name}</p>
          <p className='fontSizeSmaller'>{items[0].price}</p>
        </div>
        <div className='col-sm'>
          <img src={items[1].link} alt='item2' />
          <p className='listItemTitle fontSizeSmaller'>{items[1].name}</p>
          <p className='fontSizeSmaller'>{items[1].price}</p>
        </div>
        <div className='col-sm'>
          <img src={items[2].link} alt='item3' />
          <p className='listItemTitle fontSizeSmaller'>{items[2].name}</p>
          <p className='fontSizeSmaller'>{items[2].price}</p>
        </div>
      </div>
    </div>
  );
}
