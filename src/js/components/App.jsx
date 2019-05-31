import React, { useState } from 'react';
import styled from 'styled-components';

import CommonContainer from './../CommonComponents/Container';
import Button from '../CommonComponents/Button';
import Header from './Header';
import Main from './MainComponent';


const Container = styled(CommonContainer)`
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  flex-basis: 100%;
  justify-content: space-between;
`;

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Button>button</Button>
    </Container>
  )
}
export default App;
