import { NavLink } from 'react-router-dom';

import css from './AppBar.module.scss';

export const AppBar = () => {
  return (
    <nav className={css.appBar}>
      <ul className={css.appBar__list}>
        <li>
          <NavLink to="/register">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
