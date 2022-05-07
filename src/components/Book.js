import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../styles/Book.css';

// Progressbar
// react-circular-progress-bar

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="bookInfo">
        <span className="title">{title}</span>
        <span className="author">{author}</span>
        <div className="interfaceBtns">
          <button
            className="interfaceButton"
            type="button"
          >
            Comments
          </button>
          <button
            className="interfaceButton delete"
            id={id}
            onClick={(e) => dispatch(removeBook(e.target.id))}
            type="button"
          >
            Remove
          </button>
          <button
            className="interfaceButton"
            type="button"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="contentRight">
        <div className="progress">
          <div className="progress_outer">
            <div className="progress_inner" />
          </div>
          <div className="percentText">
            <span className="percent">0%</span>
            <span className="completed">completed</span>
          </div>
        </div>
        <div className="bookMark">
          <span className="currentChapter">Current Chapter</span>
          <span className="chapterNum">Chapter 1</span>
          <button type="button" className="updateProgress">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
