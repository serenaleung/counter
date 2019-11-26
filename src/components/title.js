import React, { useState } from 'react';

export default function Title() {
  const [title, updateTitle] = useState('my Title');
  const [inputVal, updateInput] = useState('');
  const [list, updateList] = useState([]);

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
        <div key={i}>{item}</div>
      ))}
    </div>
  );
}
