import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.scss';

const StyledLink = styled(NavLink)`
  &.active {
    color: #fff;
    background-color: #1976d2;
  }
`;

export const Navigation = () => {
  const { themeMode } = useSelector(state => state.themeMode);
  const { t } = useTranslation();

  const list = [
    { category: `${t('registration')}`, link: '/' },
    { category: `${t('login')}`, link: '/login' },
  ];

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
