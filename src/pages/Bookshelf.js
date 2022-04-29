import Book from '../components/Book';
import BookForm from '../components/BookForm';

const Bookshelf = () => {
  const state = {
    books: [
      {
        title: 'Title Here',
        author: 'Author Here',
      },
    ],
  };

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
