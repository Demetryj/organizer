import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
import { logOut } from 'redux/auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );

        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedContact = state.items.find(
          contact => contact.id === action.payload.id
        );
        updatedContact.name = action.payload.name;
        updatedContact.number = action.payload.number;
      })
      .addCase(updateContact.rejected, handleRejected)

      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactSlice.reducer;
