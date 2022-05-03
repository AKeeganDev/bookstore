import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  return (
    <form action="submit">
      <label htmlFor="title">
        <input type="text" name="title" id="title" placeholder="Add Title..." />
      </label>
      <label htmlFor="title">
        <input type="text" name="author" id="author" placeholder="Add Author..." />
      </label>
      <button
        onClick={(e) => {
          e.preventDefault();
          const newTitle = e.target.parentElement.title.value;
          const newAuthor = e.target.parentElement.author.value;
          dispatch(addBook(newTitle, newAuthor));
          e.target.parentElement.title.value = '';
          e.target.parentElement.author.value = '';
        }}
        type="submit"
      >
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
