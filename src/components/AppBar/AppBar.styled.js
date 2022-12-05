import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  padding: 8px;

  color: black;
  text-decoration: none;

  border-radius: 8px;

  &:hover {
    color: #e67e22;
  }

  &.active {
    color: white;

    background-color: #e67e22;
  }
`;
