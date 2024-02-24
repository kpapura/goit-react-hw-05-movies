import styled from "styled-components";

export const List = styled.ul`
padding-left:0;
width: 600px;
`

export const Item = styled.li`
padding: 10px;
list-style: none;
border: 1px solid black;
border-radius: 30px;
overflow: hidden;
margin-bottom:15px;
&>p>span{
    font-weight: bold;
    text-decoration: underline;
}
`