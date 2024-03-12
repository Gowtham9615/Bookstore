
import React from 'react';
import './Book.css';
const Book = ({ id, title, author, year }) => {
  return (
    <div>
        <div className="book">
        <div>{id}</div>
        <div>{title}</div>
        <div>{author}</div>
        <div>{year}</div>
        </div>
    </div>
  );
};

export default Book;
