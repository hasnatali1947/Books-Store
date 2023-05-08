import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.items.push(action.payload);
    },
    removeBook: (state, action) => {
      state.items = state.items.filter((book) => book.id !== action.payload);
    },
  },
});

export default bookSlice.reducer;
