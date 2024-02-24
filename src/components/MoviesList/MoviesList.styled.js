import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Heading = styled.h1`
text-align: center;
text-decoration: underline overline;
`

export const Section = styled.section`
background-color: lightgray;
padding: 20px 25px;
width: 1000px;
margin: 0 auto;
margin-top: 15px;
border-radius: 100px;
margin-bottom: 20px
`
export const Item = styled.li`
list-style: none;
`
export const StyledNavLink = styled(NavLink)`
background-color: rgba(253, 253, 253, 0.598);
color: black;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 18px;
  border: 1px solid grey;
  border-radius: 20px;
  color: black;
  text-decoration: none;
  margin-bottom:5px;
  width: 500px;
&:hover{
background-color: lightgray;
border: 1px solid white;
}
`
