import React, { useState, useEffect } from 'react';
import Task from './task';

export default function Title() {
  const [title] = useState('List');
  const [inputVal, updateInput] = useState('');
  const [list, updateList] = useState([]);
  const handleChange = e => {
    if (e.target.value !== '') {
      let filterList = list.filter(list => {
        const lc = list.toLowerCase();
        const filter = e.target.value.toLowerCase();
        console.log('list, lc.includes(filter)', list, lc.includes(filter));
        return lc.includes(filter);
      });
    } else {
      // let filterList = list;
      console.log('filterList', list);
      return list;
    }
  };

  useEffect(() => {
    console.log('effect run');
  }, [list, inputVal]);

  return (
    <div>
      <h3>{title}</h3>
      <input onChange={handleChange} placeholder='Search'></input>
      <input
        type='text'
        value={inputVal}
        onChange={e => updateInput(e.target.value)}
        className='inputList'
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
