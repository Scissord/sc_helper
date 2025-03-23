import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';
import userReducer from './userSlice.js';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  }
});