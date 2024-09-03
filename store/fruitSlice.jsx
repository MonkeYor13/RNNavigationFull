import { createSlice } from '@reduxjs/toolkit';

export const fruitSlice = createSlice({
  name: 'fruits',
  initialState: {
    selectedFruits: [],
  },
  reducers: {
    addFruit: (state, action) => {
      state.selectedFruits.push(action.payload);
    },
    removeFruit: (state, action) => {
      state.selectedFruits = state.selectedFruits.filter(fruit => fruit !== action.payload);
    },
  },
});

export const { addFruit, removeFruit } = fruitSlice.actions;
export default fruitSlice.reducer;