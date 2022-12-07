import Button from '@mui/material/Button';
import css from './ContactList.module.scss';

export const ContactList = ({
  contacts,
  editContactFunc,
  deleteContactFunc,
}) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactList__item}>
            <p>
              <b>{name}:</b> {number};
            </p>
            <div className={css.contactList__buttonContainer}>
              <Button
                className={css.contactList__button}
                variant="contained"
                size="small"
                type="button"
                onClick={() => editContactFunc(id)}
              >
                Edit
              </Button>
              <Button
                className={css.contactList__button}
                type="button"
                variant="contained"
                size="small"
                onClick={() => deleteContactFunc(id)}
              >
                Delete
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
