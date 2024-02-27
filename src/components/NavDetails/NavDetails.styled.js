import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  height: 30px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: lightgray;
  border: 1px solid black;
  padding: 3px 5px;
  transition: background-color 0.3s ease;
  &:hover {
    color: red;
    background-color: white;
  }
  &.active {
    color: red;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
