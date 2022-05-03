import Book from '../components/Book';
import BookForm from '../components/BookForm';

const state = {
  books: [
    {
      title: 'Aaron is Great',
      author: 'Aaron THE Great',
    },
  ],
};

const Bookshelf = () => {
  const { title, author } = state.books[0];

  return (
    <>
      <ul className="bookshelf">
        <Book title={title} author={author} />
      </ul>
      <BookForm />
    </>
  );
};

export default Bookshelf;
