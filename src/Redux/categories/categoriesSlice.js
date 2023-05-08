import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    status: 'Under construction',
  },
  reducers: {
    checkstate: (state) => {
      state.status = 'Under construction';
    },
  },
});

export default categoriesSlice.reducer;
