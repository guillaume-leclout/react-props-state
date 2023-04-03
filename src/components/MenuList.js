import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {foodItems.map((foodItem) => (
        <MenuItem props="A"/>
      ))}
    </div>
  );
}

export default MenuList;
