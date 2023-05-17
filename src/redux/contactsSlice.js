import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

// const handlePending = state => (state.isLoading = true);

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const fetchContactsFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// };

// const addContactsFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items.push(action.payload);
// };

// const deleteContactsFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   const indexContact = state.items.findIndex(
//     item => item.id === action.payload.id
//   );
//   state.items.splice(indexContact, 1);
// };

//* додаткове скорочення(чомусь не працює)
// const contactsFnArr = [fetchContacts, addContact, deleteContact];
// const contactsTypeFn = type => contactsFnArr.map(el => el[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  // extraReducers: builder => {
  //   builder
  //     // .addCase(fetchContacts.pending, handlePending)
  //     .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
  //     // .addCase(fetchContacts.rejected, handleRejected)
  //     // .addCase(addContact.pending, handlePending)
  //     .addCase(addContact.fulfilled, addContactsFulfilled)
  //     // .addCase(addContact.rejected, handleRejected)
  //     // .addCase(deleteContact.pending, handlePending)
  //     .addCase(deleteContact.fulfilled, deleteContactsFulfilled)
  //     // .addCase(deleteContact.rejected, handleRejected);
  //     // * додаткове скорочення(чомусь не працює)
  //     .addMatcher(isAnyOf(...contactsTypeFn('pending')), handlePending)
  //     .addMatcher(isAnyOf(...contactsTypeFn('rejected')), handleRejected);
  // },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const indexContact = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(indexContact, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
