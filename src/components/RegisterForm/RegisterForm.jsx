import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '@mui/material/Button';
import css from './RegisterForm.module.scss';
import { useTranslation } from 'react-i18next';

const initialValue = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = ({ handleChange }) => {
  const [user, setUser] = useState(initialValue);
  const { t } = useTranslation();

  const onHandleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleChange(user);
    setUser(initialValue);
  };

  return (
    <form className={css.registerForm} onSubmit={handleSubmit}>
      <label>
        {t('name')}
        <input
          className={css.registerForm__label}
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          minLength="5"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onHandleChange}
          value={user.name}
        ></input>
      </label>
      <label>
        {t('email')}
        <input
          className={css.registerForm__label}
          name="email"
          type="email"
          onChange={onHandleChange}
          value={user.email}
        ></input>
      </label>
      <label>
        {t('password')}
        <input
          className={css.registerForm__label}
          type="password"
          name="password"
          minLength="7"
          onChange={onHandleChange}
          value={user.password}
        ></input>
      </label>
      <Button
        className={css.registerForm__button}
        variant="contained"
        size="small"
        type="submit"
      >
        Register
      </Button>
    </form>
  );
};

RegisterForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
