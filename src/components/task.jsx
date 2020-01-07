import React, { useState } from 'react';
import IconClose from '../close.svg';
import IconCloseHover from '../close-hover.svg';

export default function Task() {
  const [icon, hoverIcon] = useState(IconClose);

  return (
    <div
      className='noBorder'
      onMouseEnter={() => hoverIcon(IconCloseHover)}
      onMouseLeave={() => hoverIcon(IconClose)}
    >
      <img className='iconSize' src={icon} alt='close icon' />
    </div>
  );
}
