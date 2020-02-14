import React from 'react';

export default function Search(props) {
  const onChangeChild = e => {
    props.onChange(e);
  };

  return (
    <div>
      <input
        className='bp3-input'
        placeholder='Search items...'
        type='text'
        aria-label='Search'
        value={props.searchQuery}
        onChange={onChangeChild}
      />
    </div>
  );
}
