import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  background-color: #f9f8f8;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 900;
  font-size: 30px;
  &.active {
    color: red;
  }
`;
