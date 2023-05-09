import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
export const { setStatus } = categoriesSlice.actions;
