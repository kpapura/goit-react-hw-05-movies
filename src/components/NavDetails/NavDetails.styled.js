import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &:hover{
    color: white;
}
&.active{
  color: red;
}
`