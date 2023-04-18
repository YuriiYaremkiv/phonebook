import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'components/Layout/Layout';
import { Filter } from 'components/Filter/Filter';
import { ListContact } from 'components/ListContact/ListContact';
import { PatchContact } from 'components/PatchContact/PatchContact';
import { getContacts, getFilter, getIsLoading } from 'redux/contacts/selectors';
import { authSelectors } from '../redux/auth';
import { FormContact } from 'components/FormContact/FormContact';
import { useTranslation } from 'react-i18next';
import ContactsOperations from '../redux/contacts/contact-operations';

export const PageContact = () => {
  const [editedContact, setEditedContact] = useState({});
  const [blockLayout, setBlockLayout] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const inProgress = useSelector(getIsLoading);
  const isLogged = useSelector(authSelectors.getisLogged);
  const filter = useSelector(getFilter);
  const { t } = useTranslation();

  useEffect(() => {
    if (isLogged) dispatch(ContactsOperations.fetchContacts());
  }, [dispatch, isLogged]);

  const handleDeleteContact = id => {
    dispatch(ContactsOperations.deleteContact(id));
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
    dispatch(ContactsOperations.updateContact(updatedContact));
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

        <Layout title={t('allcontacts')} blockLayoutValue={blockLayout}>
          <Filter />

          <ListContact
            contacts={contactsList}
            editContactFunc={handleEditContact}
            deleteContactFunc={handleDeleteContact}
          />
        </Layout>
      </div>
    </section>
  );
};
