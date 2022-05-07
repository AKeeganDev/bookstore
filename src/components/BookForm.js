import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import '../styles/BookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <span className="header">Add Book</span>
      <form action="submit">
        <label htmlFor="title">
          <input type="text" name="title" id="title" placeholder="Add Title..." />
        </label>
        <label htmlFor="title">
          <input type="text" name="author" id="author" placeholder="Add Author..." />
        </label>
        <button
          className="addBtn"
          onClick={(e) => {
            // prevents page reset
            e.preventDefault();

            // establishes values from the form fields into variables for passing into dispatch
            const newTitle = e.target.parentElement.title.value;
            const newAuthor = e.target.parentElement.author.value;

            dispatch(addBook(newTitle, newAuthor));

            // resets the form inputs
            e.target.parentElement.title.value = '';
            e.target.parentElement.author.value = '';
          }}
          type="submit"
        >
          Add Book
        </button>
      </form>
    </>

  );
};

export default BookForm;
