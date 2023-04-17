import { createSlice } from '@reduxjs/toolkit';
import ContactsOperations from './contact-operations';

export const phoneBookSliceReducer = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: '',
    },
  },
  extraReducers: builder => {
    builder.addCase(ContactsOperations.fetchContacts.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(
      ContactsOperations.fetchContacts.fulfilled,
      (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.items = actions.payload;
      }
    );
    builder.addCase(
      ContactsOperations.fetchContacts.rejected,
      (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.error = actions.payload;
      }
    );
    builder.addCase(ContactsOperations.addContact.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(
      ContactsOperations.addContact.fulfilled,
      (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.items = [...state.contacts.items, actions.payload];
      }
    );
    builder.addCase(
      ContactsOperations.addContact.rejected,
      (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.error = actions.payload;
      }
    );
    builder.addCase(ContactsOperations.deleteContact.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(
      ContactsOperations.deleteContact.fulfilled,
      (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== actions.payload
        );
      }
    );
    builder.addCase(
      ContactsOperations.deleteContact.rejected,
      (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.error = actions.payload;
      }
    );
    builder.addCase(ContactsOperations.updateContact.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(
      ContactsOperations.updateContact.fulfilled,
      (state, actions) => {
        state.contacts.isLoading = false;
        const index = state.contacts.items.findIndex(
          contact => contact.id === actions.payload.id
        );
        state.contacts.items[index] = { ...actions.payload };
      }
    );
    builder.addCase(
      ContactsOperations.updateContact.rejected,
      (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.error = actions.payload;
      }
    );
  },
});
