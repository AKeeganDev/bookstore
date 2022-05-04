import { v4 as uniqueID } from 'uuid';

const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';

// sets initial default state for the shelf (empty);
const initialState = {
  books: [],
};

export const addBook = (newTitle, newAuthor) => {
  const newID = uniqueID();
  return {
    type: ADD_BOOK,
    payload: { id: newID, title: newTitle, author: newAuthor },
  };
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return { ...state, books: [...state.books, action.payload] };
    }
    case REMOVE_BOOK: {
      const filteredBooks = state.books.filter((booke) => booke.id !== action.payload);
      return { ...state, books: [...filteredBooks] };
    }
    default:
      return state;
  }
};
