import { useSelector } from 'react-redux';
import Book from '../components/Book';
import BookForm from '../components/BookForm';

// const state = {
//   books: [
//     {
//       title: 'Aaron is Great',
//       author: 'Aaron THE Great',
//     },
//   ],
// };

const Bookshelf = () => {
  const books = useSelector((state) => state.bookshelf);
  return (
    <>
      <ul className="bookshelf">
        {
          books.books.map((book) => (
            <li key={book.id}>
              <Book id={book.id} title={book.title} author={book.author} />
            </li>
          ))
        }
      </ul>
      <BookForm />
    </>
  );
};
export default Bookshelf;
