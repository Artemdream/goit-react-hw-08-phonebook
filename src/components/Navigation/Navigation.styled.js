import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.5, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.5, 0, 0.2, 1);

  &.active {
    color: rgb(255, 69, 0);
  }

  :hover {
    box-shadow: rgb(240, 119, 49) 0px 1px 25px 0px,
      rgba(240, 119, 49) 0px 0px 0px 1px;
  }

  :active {
    background-color: rgba(240, 119, 49, 0.8);
    color: #fff;
  }

  @media (max-width: 479px) {
    font-size: 12px;
    padding: 5px 5px;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;
