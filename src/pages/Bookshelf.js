import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Book from '../components/Book';
import BookForm from '../components/BookForm';

const initialState = {
  books: [],
};

const setStore = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK': {
      console.log('adding book');
      console.log(action.payload);
      return { ...state, books: [...state.books, action.payload] };
    }
    case 'REMOVE_BOOK': {
      console.log('removing book');
      console.log(action.payload);
      const filteredBooks = state.books.filter((book) => book.id !== action.payload.id);
      return { ...state, books: [...filteredBooks] };
    }
    default:
      return state;
  }
};

const ADDBOOK = 'ADD_BOOK';

const rootReducer = combineReducers({ add: setStore });
const store = configureStore({ reducer: rootReducer });

// dispatches 2 books
store.dispatch({
  type: ADDBOOK,
  payload: {
    id: 0,
    title: 'Aaron is Great',
    author: 'Aaron THE Great',
  },
});

store.dispatch({
  type: ADDBOOK,
  payload: {
    id: 1,
    title: 'Aaron is SUPER Great',
    author: 'Aaron THE Great',
  },
});

// removes the 2nd book from the array

store.dispatch({
  type: 'REMOVE_BOOK',
  payload: {
    id: 1,
  },
});
const state = store.getState();

// const state = {
//   books: [
//     {
//       title: 'Title Here',
//       author: 'Author Here',
//     },
//   ],
// };

console.log(store.getState());

const Bookshelf = () => {
  const { title, author } = state.add.books[0];

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
