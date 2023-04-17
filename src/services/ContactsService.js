import API from '../http';

class ContactsService {
  static async fetchContacts() {
    return API.get('/contacts');
  }

  static async addContact(contact) {
    return API.post('/contacts', contact);
  }

  static async deleteContact(id) {
    return API.delete(`/contacts/${id}`);
  }

  static async updateContact(contact) {
    return API.patch(`/contacts/${contact.id}`, {
      name: contact.name,
      number: contact.number,
    });
  }
}

export default ContactsService;
