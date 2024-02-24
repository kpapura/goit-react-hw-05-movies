import styled from 'styled-components';

export const SearchFormTag = styled.form`
  display: flex;
  align-items: center;
  width: 500px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid black;
  padding: 20px;
  justify-content: space-between;
  margin: 0 auto;  
  margin-top: 30px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 110px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items:center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
  &>p{
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 1px solid gray;
  padding: 8px 8px;
  margin-top:5px;
  border-radius:10px;
`;

