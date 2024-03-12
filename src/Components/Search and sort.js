import React, { useState } from 'react';
import SearchBar from './SearchField';
import Emp from './Emplist.js';
import SortButton from './SortButton';

const SearchComponent = ({ books }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
//   let result=null;
  function handleSearch(keyword) {
    const filtered = books.filter(
      function(book) {
        const lowerCaseKeyword = keyword.toLowerCase();
        const title = book.title.toLowerCase();
        const year = book.year.toLowerCase();
        const id = book.id;
        console.log(lowerCaseKeyword);
        const author = book.author.toLowerCase();
        return title.includes(lowerCaseKeyword) || author.includes(lowerCaseKeyword) || id.includes(lowerCaseKeyword)||year.includes(lowerCaseKeyword);
      }
    );
     setFilteredBooks(filtered);
  }
  const [sortedBy, setSortedBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [SortBooks, setSortBooks] = useState(books);
  const handleSort = column => {
    console.log(column);
   
    let sorted;
    if (sortedBy === column) {
      sorted = SortBooks.slice().reverse();
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      sorted = SortBooks.slice().sort((a, b) => {
        if (a[column] < b[column]) return sortOrder === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
      setSortedBy(column);
      setSortOrder('asc');
    }
    console.log(sorted);
    setSortBooks(sorted);
    setFilteredBooks(sorted);
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SortButton
          label="ID"
          isActive={sortedBy === 'id'}
          onClick={() => handleSort('id')}
        />
        <SortButton
          label="Title"
          isActive={sortedBy === 'title'}
          onClick={() => handleSort('title')}
        />
        <SortButton
          label="Author"
          isActive={sortedBy === 'author'}
          onClick={() => handleSort('author')}
        />
        <SortButton
          label="Year"
          isActive={sortedBy === 'year'}
          onClick={() => handleSort('year')}
        />
      <Emp books={filteredBooks} />
    </div>
  );
};

export default SearchComponent;
