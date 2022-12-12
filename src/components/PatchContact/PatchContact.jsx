import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Button from '@mui/material/Button';
import css from './PatchContact.module.scss';

export const PatchContact = ({
  contact,
  updateContactFunc,
  hidePatchContact,
}) => {
  const [editContact, setEditContact] = useState({
    id: '',
    name: '',
    number: '',
  });

  useEffect(() => {
    if (!contact.name) {
      return;
    }

    setEditContact({
      id: contact.id,
      name: contact.name,
      number: contact.number,
    });
  }, [contact]);

  const onHandleChange = e => {
    const { name, value } = e.target;
    setEditContact(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    if (
      editContact.name === contact.name &&
      editContact.number === contact.number
    ) {
      Notify.info('Make changes to the contact or close this window!');
      return;
    }
    updateContactFunc(editContact);
  };

  return (
    <div className={css.patchContact__container}>
      <form onSubmit={e => onHandleSubmit(e)}>
        <label className={css.patchContact__label}>
          Name:
          <input
            className={css.patchContact__input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => onHandleChange(e)}
            value={editContact.name}
          />
        </label>
        <label className={css.patchContact__label}>
          Number:
          <input
            className={css.patchContact__input}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => onHandleChange(e)}
            type="text"
            value={editContact.number}
          />
        </label>
        <div className={css.patchContact__button}>
          <Button
            variant="contained"
            size="small"
            type="submit"
            color="success"
          >
            Accept
          </Button>
          <Button
            onClick={hidePatchContact}
            variant="contained"
            size="small"
            type="button"
            color="error"
          >
            Close
          </Button>
        </div>
      </form>
    </div>
  );
};

PatchContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  updateContactFunc: PropTypes.func.isRequired,
  hidePatchContact: PropTypes.func.isRequired,
};
