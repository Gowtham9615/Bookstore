import React from 'react';
import './Book.css';
const SortButton = ({ onClick, label, isActive }) => {
  return ( 
        <button onClick={onClick} className={isActive ? 'active' : '' }  id='bo'>
         Sort By: {label}
        </button>
  );
};

export default SortButton;
