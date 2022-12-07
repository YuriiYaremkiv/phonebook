import { useState } from 'react';
import Button from '@mui/material/Button';
import css from './LoginForm.module.scss';

const initialValue = {
  email: '',
  password: '',
};

export const LoginForm = ({ loginUser }) => {
  const [user, setUser] = useState(initialValue);

  const onHandleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const hadleSumbmit = e => {
    e.preventDefault();
    loginUser(user);
    setUser(initialValue);
  };

  return (
    <form className={css.loginForm} onSubmit={hadleSumbmit}>
      <label>
        Email:
        <input
          className={css.loginForm__input}
          name="email"
          type="email"
          onChange={onHandleChange}
          value={user.email}
        />
      </label>
      <label>
        Password:
        <input
          className={css.loginForm__input}
          name="password"
          type="password"
          onChange={onHandleChange}
          value={user.password}
        />
      </label>
      <Button
        className={css.loginForm__button}
        variant="contained"
        size="small"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};
