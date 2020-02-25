import React from 'react';
import { ControlGroup } from '@blueprintjs/core';

export default function Sort(props) {
  const onChange = e => {
    props.onChange(e);
  };

  return (
    <ControlGroup className='justifyEnd' fill={false} vertical={false}>
      <div className='bp3-control-group'>
        <div className='bp3-select'>
          <select value={props.sortValue} onChange={onChange}>
            <option defaultValue>Sort By</option>
            <option value='1'>Newest</option>
            <option value='2'>Price: High-Low</option>
            <option value='3'>Price: Low-High</option>
          </select>
        </div>
      </div>
    </ControlGroup>
  );
}
