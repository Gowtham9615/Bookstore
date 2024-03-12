import Book from './Details';
import Bar from './TitleBar';
const BookGrid = ({books}) => {
  if(!books){
    return null;
  }


  return (
    <div>
      <Bar />
      {books.map(book => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
        /> 
      ))}
    </div>
  );
};

export default BookGrid;

