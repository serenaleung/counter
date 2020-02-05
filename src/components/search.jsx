import React from 'react';

export default function Search(props) {
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
        value={props.searchQuery}
        onChange={onChangeChild}
      />
    </div>
  );
}
