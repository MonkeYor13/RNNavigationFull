import { configureStore } from '@reduxjs/toolkit';
import fruitReducer from './fruitSlice';

export const myStore = configureStore({
  reducer: {
    fruits: fruitReducer,
  },
});