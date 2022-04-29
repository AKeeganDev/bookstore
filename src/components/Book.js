import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;

  return (
    <ul className="bookshelf">
      <li className="book">
        <span className="title">{title}</span>
        <span className="author">{author}</span>
      </li>
      <button type="button">Delete</button>
    </ul>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
