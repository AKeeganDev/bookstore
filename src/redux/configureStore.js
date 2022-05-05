import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
import Books from './books/books';
import Categories from './categories/categories';

const rootReducer = combineReducers({ bookshelf: Books, checkStatus: Categories });
const middleWare = applyMiddleware(thunk, logger);
const store = configureStore({ reducer: rootReducer }, middleWare);

export default store;
