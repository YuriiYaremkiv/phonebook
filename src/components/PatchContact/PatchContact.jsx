import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import css from './PatchContact.module.scss';

export const PatchContact = ({ contact }) => {
  const [editContact, setEditContact] = useState({
    name: '',
    number: '',
  });

  useEffect(setEditContact({ name: '', number: '' }), [contact]);

  const onHandleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setEditContact(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className={css.patchContact__container}>
      <label className={css.patchContact__label}>
        Name:
        <input
          type="text"
          name="name"
          onChange={e => onHandleChange(e)}
          value={editContact.name}
        />
      </label>
      <label className={css.patchContact__label}>
        Number:
        <input
          name="number"
          onChange={e => onHandleChange(e)}
          type="text"
          value={editContact.number}
        />
      </label>
      <div className={css.patchContact__containerButton}>
        <Button
          className={css.patchContact__button}
          variant="contained"
          size="small"
          type="button"
          color="success"
        >
          Accept
        </Button>
        <Button variant="contained" size="small" type="button" color="error">
          Close
        </Button>
      </div>
    </div>
  );
};
