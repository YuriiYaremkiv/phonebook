import { NavLink } from 'react-router-dom';
import { NavLinkStyled } from './AppBar.styled';
import css from './AppBar.module.scss';

export const AppBar = () => {
  return (
    <nav className={css.appBar}>
      <ul className={css.appBar__list}>
        <li>
          <NavLinkStyled to="/register">Registration</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
        </li>
      </ul>
    </nav>
  );
};
