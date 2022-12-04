import { useState } from 'react';

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
          className=""
          name="name"
          type="text"
          onChange={onHandleChange}
          value={user.name}
          placeholder="Your name"
        ></input>
      </label>
      <label>
        Email:
        <input
          className=""
          name="email"
          type="email"
          onChange={onHandleChange}
          value={user.email}
          placeholder="Your email"
        ></input>
      </label>
      <label>
        Password
        <input
          className=""
          type="password"
          name="password"
          onChange={onHandleChange}
          value={user.password}
          placeholder="Your password"
        ></input>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
