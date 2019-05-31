import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CommonContainer from '../CommonComponents/Container';
import Header from './Header';
import Main from './MainComponent'

import { fetchData } from '../../api/config';


const Container = styled(CommonContainer)`
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  flex-basis: 100%;
  justify-content: space-between;
`;

function App() {

  useEffect(() => {
    // fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f3907ccd45504feea10309a6931c52d8')
    fetchData()
      // .then(res => console.log(res));
  });


  return (
    <Container>
      <Header />
      <Main />
    </Container>
  )
}
export default App;
