import { ContactForm } from 'components/ContactForm/ContactForm';
import { Progress } from 'components/Progress/Progress';
import { Error } from 'components/Error/Error';
import { Layout } from 'components/Layout1/Layout1';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import css from './ContactsPage.module.scss';

export const ContactsPage = () => {
  //   const dispatch = useDispatch();
  //   const filter = useSelector(getFilter);
  //   const contacts = useSelector(getContacts);

  // const filteredContactsUser =
  //   filter.length > 0
  //     ? contacts.filter(contact =>
  //         contact.name.toLocaleLowerCase().includes(filter)
  //       )
  //     : null;

  // const contactsList = filter.length > 0 ? filteredContactsUser : contacts;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <Progress />
      <Error />

      <Layout>
        <Filter />
        {/* <ContactList /> */}
      </Layout>
    </div>
  );
};
