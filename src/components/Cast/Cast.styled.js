import styled from "styled-components";

export const List = styled.ul`
padding-left:0;
/* display: flex;
flex-direction:column; */
width: 400px;
`

export const Item = styled.li`
list-style: none;
display: flex;
flex-direction: column;
flex-wrap:wrap;
margin-bottom:30px;
justify-content: center;
align-items:center;
border: 1px solid black;
padding: 20px;
border-radius:50px;
&>img{
    width: 100px;
    height: 150px;
}
&>p{
 width: 300px;
 height: 20px;
 padding: 5px;
 font-weight: bold;
 text-align:center
}
`