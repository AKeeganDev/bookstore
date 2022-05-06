import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

// Progressbar
// react-circular-progress-bar

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  return (
    <div className="book">
      <span className="title">{title}</span>
      <span className="author">{author}</span>
      <button
        id={id}
        onClick={(e) => dispatch(removeBook(e.target.id))}
        type="button"
      >
        Delete
      </button>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
