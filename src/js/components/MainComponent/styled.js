import styled from 'styled-components';

import CommonContainer from '../../CommonComponents/Container';

const Container = styled(CommonContainer)`
  flex-direction: column;
  flex: 1;
  flex-basis: 100%;
  justify-content: flex-start;
`;

const Wrapper = styled(CommonContainer)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export {
  Container,
  Wrapper,
};
