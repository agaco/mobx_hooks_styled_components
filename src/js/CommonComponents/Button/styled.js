import styled from 'styled-components';

const Element = styled.button`
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  background-color: transparent;
  color: black;
  border: 2px solid black;
  
  &:hover {
    background-color: green;
  }
    
  &:disabled {
    background-color: yellow;
    color: red;
  }
`;

export { Element };
