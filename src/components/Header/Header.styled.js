import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import img from "../../images/film.png"

export const HeaderTeg = styled.header`
background-color: white;
display: flex;
flex-direction: row;
height: 50px;
width: 1000px;
justify-content: center;
align-items: center;
padding: 10px;
background-image: url(${img});
background-size: auto 110%;
margin: 0 auto;
border-radius: 30px;
border: 1px solid black;
`
export const NavTeg = styled.nav`
background-color: white;
  border-radius: 27px;
margin-right: 20px;

`
export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 18px;
  border: 1px solid grey;
  border-radius: 27px;
  color: black;
  text-decoration: none;
&:hover{
background-color: lightgray;
border: 1px solid white;
}
&.active{
  color:red;
}
`

