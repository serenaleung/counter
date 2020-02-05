import React, { useState, useEffect } from 'react';

export default function Items(props) {
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

  const [filteredItems, setFilteredItems] = useState([]);

  const toggleEmptyCol = () => {
    let classes = '';
    classes += filteredItems.length < 3 ? 'col-sm' : 'displayNone';
    return classes;
  };

  useEffect(
    searchQuery => {
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(props.searchQuery)
      );
      setFilteredItems(filtered);
    },
    [props.searchQuery]
  );

  return (
    <div className='container'>
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
        {[1, 2].map(empty => (
          <div className={toggleEmptyCol()}></div>
        ))}
      </div>
    </div>
  );
}
