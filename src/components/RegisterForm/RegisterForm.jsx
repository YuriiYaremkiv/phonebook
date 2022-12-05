import { useState } from 'react';
import Button from '@mui/material/Button';
import css from './RegisterForm.module.scss';

const initialValue = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = ({ handleChange }) => {
  const [user, setUser] = useState(initialValue);

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
        Name:
        <input
          className={css.registerForm__label}
          name="name"
          type="text"
          onChange={onHandleChange}
          value={user.name}
        ></input>
      </label>
      <label>
        Email:
        <input
          className={css.registerForm__label}
          name="email"
          type="email"
          onChange={onHandleChange}
          value={user.email}
        ></input>
      </label>
      <label>
        Password
        <input
          className={css.registerForm__label}
          type="password"
          name="password"
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
