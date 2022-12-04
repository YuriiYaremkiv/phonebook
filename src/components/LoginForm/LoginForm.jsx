import { useState } from 'react';

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
    <form onSubmit={hadleSumbmit}>
      <label>
        Email:
        <input
          className=""
          name="email"
          type="email"
          onChange={onHandleChange}
          value={user.email}
          placeholder="Your email"
        />
      </label>
      <label>
        Password:
        <input
          className=""
          name="password"
          type="password"
          onChange={onHandleChange}
          value={user.password}
          placeholder="Your password"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
