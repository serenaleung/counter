import React, { useState, useEffect } from 'react';
import IconClose from '../close.svg';
import IconCloseHover from '../close-hover.svg';

export default function Title() {
  const [title] = useState('List');
  const [inputVal, updateInput] = useState('');
  const [list, updateList] = useState([]);
  const [icon, hoverIcon] = useState(IconClose);

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
            onMouseEnter={() => hoverIcon(IconCloseHover)}
            onMouseLeave={() => hoverIcon(IconClose)}
            onClick={() => {
              list.splice(i, 1);
              updateList([...list]);
            }}
          >
            <img className='iconSize' src={icon} alt='close icon' />
          </button>
        </div>
      ))}
    </div>
  );
}
