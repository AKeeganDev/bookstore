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
  // const { title, author } = state.books[0];
  const books = useSelector((state) => state.bookshelf);
  // const { title, author } = books.books[0];
  return (
    <>
      <ul className="bookshelf">
        {
          books.books.map((book) => (
            <li key={book.id}>
              <Book title={book.title} author={book.author} />
            </li>
          ))
        }
        {/* <Book title={title} author={author} /> */}
      </ul>
      <BookForm />
    </>
  );
};
export default Bookshelf;
