import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from '../components/Book';
import BookForm from '../components/BookForm';
import { getBooksFromAPI } from '../redux/books/books';

const Bookshelf = () => {
  const books = useSelector((state) => state.bookshelf);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromAPI());
  }, []);

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
