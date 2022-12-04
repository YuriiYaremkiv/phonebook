import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operationsAPI';

import css from './ContactList.module.scss';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li key={id} className={css.contactList__item}>
            <p>
              <b>{name}:</b>
              <br /> {phone}
            </p>
            <button
              className={css.contactList__button}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
