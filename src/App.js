import React from 'react';
import Search from './Components/Search and sort';
import Data from './Components/Data.json';
import './App.css';
const App = () => {

  const books=Data.bookData;

  return (
    <div>
      <h1 className='h2'>Book Store</h1>
      <Search books={books} />
    </div>
  );  
};

export default App;
