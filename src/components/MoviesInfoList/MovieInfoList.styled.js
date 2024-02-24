import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: white;
  border: 1px solid gray;
  border-radius: 30px;
  padding: 0 10px;
  margin-right: 20px;
  &:hover {
    background-color: gray;
    color: white;
  }
`;
export const StyledBtn = styled(Button)`
width: 100px;
  height: 35px;
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
  & > p {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    20deg,
    hsl(0deg 0% 71%) 0%,
    hsl(137deg 0% 86%) 19%,
    hsl(137deg 0% 66%) 42%,
    hsl(137deg 0% 61%) 65%,
    hsl(137deg 0% 77%) 85%,
    hsl(0deg 0% 77%) 100%
  );
  align-items: center;
  width: 800px;
  margin: 0 auto;
  padding: 10px;
  margin-top: 15px;
  border-radius: 100px;
  margin-bottom: 20px;
`;
export const List = styled.ul`
  display: flex;
  padding-left: 0;
  flex-direction: row;
`;
export const Item = styled.li`
  list-style: none;
  margin: 0 auto;
  border: 2px solid white;
  border-radius: 40px;
  padding: 20px 15px;
  & > img {
    border-radius: 10px;
    height: 400px;
    display: flex;
    margin: 0 auto;
  }
  & > h3 {
    width: 400px;
    height: 30px;
    border: 1px solid black;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  & > p {
    display: flex;
    width: 500px;
    justify-content: flex-start;
    align-items: center;
  }
  & > h4 {
    text-decoration: underline;
    margin: 0;
  }
`;
