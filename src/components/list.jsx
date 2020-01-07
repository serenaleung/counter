import React, { useState, useEffect } from 'react';
import Task from './task';

export default function Title() {
  const [title] = useState('List');
  const [inputVal, updateInput] = useState('');
  const [list, updateList] = useState([]);

  useEffect(() => {
    console.log('effect run');
  }, [list, inputVal]);

  return (
    <div>
      <h3>{title}</h3>
      <input
        type='text'
        value={inputVal}
        onChange={e => updateInput(e.target.value)}
      />
      <button
        onClick={() => {
          updateList([...list, inputVal]);
          updateInput('');
        }}
      >
        Add
      </button>
      {list.map((item, i) => (
        <div key={i}>
          {item}
          <button
            className='noBorder'
            onClick={() => {
              list.splice(i, 1);
              updateList([...list]);
            }}
          >
            <Task></Task>
          </button>
        </div>
      ))}
    </div>
  );
}
