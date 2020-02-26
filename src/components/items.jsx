import React, { useState, useEffect, Component } from 'react';

export default function Items(props) {
  const items = [
    {
      link:
        'https://res.cloudinary.com/guess-img/image/upload/w_371,h_499,c_fill,g_auto/v1/NA/Style/ECOMM/01G5105348Z-G6Y1',
      name: 'Laurie Sweater Top',
      price: '138.00'
    },
    {
      link:
        'https://res.cloudinary.com/guess-img/image/upload/w_600,h_807,c_fill,g_auto/f_auto,q_auto/fl_strip_profile/v1/NA/Style/ECOMM/W93R61R1NW1-CLGM-ALT1',
      name: 'Alivia Asymmetrical Ribbed Sweater',
      price: '79.00'
    },
    {
      link:
        'https://res.cloudinary.com/guess-img/image/upload/w_600,h_807,c_fill,g_auto/f_auto,q_auto/fl_strip_profile/v1/NA/Style/ECOMM/W9RR00R1NN2-G61B',
      name: 'Pasha Cold-Shoulder Tie Blouse',
      price: '158.00'
    },
    {
      link:
        'https://res.cloudinary.com/guess-img/image/upload/w_600,h_807,c_fill,g_auto/f_auto,q_auto/fl_strip_profile/v1/NA/Style/ECOMM/W93R61R1NW1-CLGM-ALT1',
      name: 'Alivia Asymmetrical Ribbed Sweater',
      price: '79.00'
    },
    {
      link:
        'https://res.cloudinary.com/guess-img/image/upload/w_600,h_807,c_fill,g_auto/f_auto,q_auto/fl_strip_profile/v1/NA/Style/ECOMM/W9RR00R1NN2-G61B',
      name: 'Pasha Cold-Shoulder Tie Blouse',
      price: '158.00'
    }
  ];

  const [filteredItems, setFilteredItems] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState([]);

  useEffect(() => {
    if (props.searchQuery !== undefined) {
      let filtered = items.filter(item =>
        item.name.toLowerCase().includes(props.searchQuery)
      );
      setFilteredItems(filtered);
    } else {
      let filtered = items;
      setFilteredItems(filtered);
    }
  }, [props.searchQuery]);

  useEffect(() => {
    const next = [...items].sort((a, b) => {
      if (props.sortValue === '2') {
        return a.price - b.price;
      } else if (props.sortValue === '3') {
        return b.price - a.price;
      }
    });
    setFilteredPrice(next);
  }, [props.sortValue]);

  return (
    <div>
      {/* <div className='row main'>
        {Object.keys(filteredItems).map(i => (
          <div className='displayGrid' key={i}>
            <div className='blockFill'></div>
            <img src={filteredItems[i].link} alt='item1' />
            <p className='listItemTitle fontSizeSmaller'>
              {filteredItems[i].name}
            </p>
            <p className='fontSizeSmaller'>{filteredItems[i].price} CAD</p>
          </div>
        ))} */}
      <div className='row main'>
        {Object.keys(filteredPrice).map(i => (
          <div className='displayGrid' key={i}>
            <div className='blockFill'></div>
            <img src={filteredPrice[i].link} alt='item1' />
            <p className='listItemTitle fontSizeSmaller'>
              {filteredPrice[i].name}
            </p>
            <p className='fontSizeSmaller'>{filteredPrice[i].price} CAD</p>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
}
