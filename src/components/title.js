import React, { useState } from 'react';

export default function Title() {
  const [title, updateTitle] = useState('my Title');
  return (
    <div>
      {title}
      <button onClick={() => updateTitle('NEW')}>Button</button>
    </div>
  );
}
