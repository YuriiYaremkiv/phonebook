import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.scss';

const StyledLink = styled(NavLink)`
  &.active {
    color: #fff;
    background-color: #ff6d00;
  }
`;

export const Navigation = ({ list = [] }) => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <nav>
      <ul className={css.list}>
        {list.map(({ category, link }) => {
          return (
            <li key={category}>
              <StyledLink to={link} className={css[`link__${themeMode}`]}>
                {category}
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
