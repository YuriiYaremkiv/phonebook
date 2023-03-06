import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Layout } from 'components/Layout/Layout';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { PatchContact } from 'components/PatchContact/PatchContact';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operationsAPI';
import { deleteContact, updateContact } from 'redux/contacts/operationsAPI';
import { FormContact } from 'components/FormContact/FormContact';
import { useTranslation } from 'react-i18next';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const inProgress = useSelector(getIsLoading);
  const filter = useSelector(getFilter);
  const inError = useSelector(getError);
  const [editedContact, setEditedContact] = useState({});
  const [blockLayout, setBlockLayout] = useState(false);
  const { t } = useTranslation();

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
    setBlockLayout(true);
  };

  const hidePatchContact = () => {
    if (!inProgress) {
      setBlockLayout(false);
    }
  };

  const onUpdateContact = updatedContact => {
    dispatch(updateContact(updatedContact));
    if (!inProgress) {
      setBlockLayout(false);
    }
  };

  const filteredContactsUser =
    filter.length > 0
      ? contacts.filter(contact =>
          contact.name.toLocaleLowerCase().includes(filter)
        )
      : null;

  const contactsList = filter.length > 0 ? filteredContactsUser : contacts;

  return (
    <section>
      <div className="container">
        <Layout title={t('addContact')} blockLayoutValue={blockLayout}>
          <FormContact />
        </Layout>

        {blockLayout ? (
          <>
            <Layout title="Edit contact">
              <PatchContact
                contact={editedContact}
                hidePatchContact={hidePatchContact}
                updateContactFunc={onUpdateContact}
              />
            </Layout>
          </>
        ) : null}

        <Layout title="All contacts" blockLayoutValue={blockLayout}>
          <Filter />

          <ContactList
            contacts={contactsList}
            editContactFunc={handleEditContact}
            deleteContactFunc={handleDeleteContact}
          />
        </Layout>
      </div>
    </section>
  );
};
