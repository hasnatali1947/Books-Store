import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booklist: [],
};

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booklist.pop(action.payload);
    },
    removeBook: (state, action) => {
      state.booklist.pop(action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice;
