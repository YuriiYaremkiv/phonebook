import { createAsyncThunk } from '@reduxjs/toolkit';
import ContactsService from '../../services/ContactsService';

class ContactsOperations {
  static fetchContacts = createAsyncThunk(
    'contacts/fetchContacts ',
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await ContactsService.fetchContacts('/contacts');
        return data;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );

  static addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
      try {
        const { data } = await ContactsService.addContact(contact);
        return data;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );

  static deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
      try {
        await ContactsService.deleteContact(id);
        return id;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );

  static updateContact = createAsyncThunk(
    'contacts/updateContact',
    async (contact, { rejectWithValue }) => {
      try {
        const { data } = await ContactsService.updateContact(contact);
        return data;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );
}

export default ContactsOperations;
