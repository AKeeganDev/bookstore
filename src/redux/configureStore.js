import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Books from './books/books';
import Categories from './categories/categories';

const rootReducer = combineReducers({ bookshelf: Books, checkStatus: Categories });
const store = configureStore({ reducer: rootReducer });

export default store;
