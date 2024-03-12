import React, { useState } from 'react';
import './Search.css';
const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = event => {
    setKeyword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} >
      <input className='Sear'
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search by Id or Title or Author or Year" 
        
      />
      
      <div className='bu'><button type="submit" className='button' >Search</button></div>
    </form>
  );
};
export default SearchBar;
