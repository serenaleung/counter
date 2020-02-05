import React, { useState } from 'react';

export default function Search(props) {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [filteredItems, setFilteredItems] = useState([]);
  // const handleChange = e => {
  //   setSearchQuery(e.target.value.toLowerCase());
  // };

  const onChangeChild = e => {
    props.onChange(e);
  };

  return (
    <div>
      <input
        className='form-control mr-sm-2'
        type='search'
        placeholder='Search'
        aria-label='Search'
        // value={searchQuery}
        value={props.searchQuery}
        onChange={onChangeChild}
      />
    </div>
  );
}
