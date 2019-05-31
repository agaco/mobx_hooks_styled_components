import styled from 'styled-components';

const Element = styled.div`
  display: flex;
  box-sizing: border-box;
  ${props => props.primary && `
    width: 100%;
    max-width: 1170px;
  `}
`;

export { Element };
