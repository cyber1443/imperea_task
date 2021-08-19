import {createSlice} from '@reduxjs/toolkit';

export const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    categories: {
      isLoading: true,
      data: [],
    },
    coupons: {
      isLoading: true,
      data: [],
    },
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories.data = action.payload;
      state.categories.isLoading = false;
    },
    setCoupons: (state, action) => {
      state.coupons.data = action.payload;
      state.coupons.isLoading = false;
    },
  },
});

export const {setCategories, setCoupons} = feedSlice.actions;

export default feedSlice.reducer;
