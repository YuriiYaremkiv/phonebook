import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Progress } from 'components/Progress/Progress';
import { Error } from 'components/Error/Error';
import { Layout } from 'components/Layout1/Layout1';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { PatchContact } from 'components/PatchContact/PatchContact';

import { getContacts, getFilter } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operationsAPI';
import { deleteContact } from 'redux/contacts/operationsAPI';
import css from './ContactsPage.module.scss';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [edit, setEdit] = useState(false);
  const [editedContact, setEditedContact] = useState({});

  const filter = useSelector(getFilter);

  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleEditContact = id => {
    setEditedContact(() => {
      return contacts.find(contact => contact.id === id);
    });
    const add = contacts.find(contact => contact.id === id);

    console.log('dfdsvdv', add);
  };

  const filteredContactsUser =
    filter.length > 0
      ? contacts.filter(contact =>
          contact.name.toLocaleLowerCase().includes(filter)
        )
      : null;

  const contactsList = filter.length > 0 ? filteredContactsUser : contacts;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <Progress />
      <Error />

      {!edit ? (
        <>
          <h2 className={css.title}>Edit contact</h2>
          <PatchContact contact={editedContact} />
        </>
      ) : null}

      <Layout>
        <Filter />

        <ContactList
          contacts={contactsList}
          editContactFunc={handleEditContact}
          deleteContactFunc={handleDeleteContact}
        />
      </Layout>
    </div>
  );
};
