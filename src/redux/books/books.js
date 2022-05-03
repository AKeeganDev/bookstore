const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// sets initial default state for the shelf (empty);
const initialState = [];

export const addBook = (newID, newTitle, newAuthor) => (
  {
    type: ADD_BOOK,
    payload: { id: newID, title: newTitle, author: newAuthor },
  }
);
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state.books, action.payload];
    }
    case REMOVE_BOOK: {
      const filteredBooks = state.filter((book) => book.id !== action.payload.id);
      return [...filteredBooks];
    }
    default:
      return state;
  }
};
