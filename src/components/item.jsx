import React, { useEffect, useState } from 'react';

export default function Item(props) {
  const [item, hoveredItem] = useState(props.filteredItems[props.i].link);

  useEffect(() => {
    if (item !== props.filteredItems) {
      hoveredItem(props.filteredItems[props.i].link);
    }
  }, [props.filteredItems]);
  return (
    <div
      onMouseEnter={() => hoveredItem(props.filteredItems[props.i].link2)}
      onMouseLeave={() => hoveredItem(props.filteredItems[props.i].link)}
    >
      <img src={item} alt={`${props.items[props.i]}`}></img>
    </div>
  );
}
