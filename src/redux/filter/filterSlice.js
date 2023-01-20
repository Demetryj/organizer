import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, state => {
      return (state = '');
    });
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
