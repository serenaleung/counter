import React, { Component, useState, useEffect } from 'react';

export default function Items() {
  const items = [
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
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery)
    );
    setFilteredItems(filtered);
  }, [searchQuery]);

  return (
    <div className='container'>
      <div className='row'>
        <input onChange={handleChange} placeholder='Search'></input>
      </div>
      <div className='row'>
        {Object.keys(filteredItems).map((name, i) => (
          <div className='col-sm' key={i}>
            <img src={filteredItems[i].link} alt='item1' />
            <p className='listItemTitle fontSizeSmaller'>
              {filteredItems[i].name}
            </p>
            <p className='fontSizeSmaller'>{filteredItems[i].price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
