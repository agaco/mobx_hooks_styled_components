import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { DATA_GET_REQUEST, SET_LOADING } from '../store/utility/constants';

import CommonContainer from '../CommonComponents/Container';
import Header from './Header';
import Main from './MainComponent'

import { fetchData, getSources } from '../../api/config';


const Container = styled(CommonContainer)`
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  flex-basis: 100%;
  justify-content: space-between;
`;

function App() {

  const news = useSelector(state => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    // news.news.length <= 0 && dispatch({ type: SET_LOADING });
    // getSources()
      // .then(res => res && res.ok && dispatch({ type : DATA_GET_REQUEST}));

    // dispatch({ type: SET_LOADING });
    // fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f3907ccd45504feea10309a6931c52d8')
    // fetchData()
    // getSources()
    //   .then(res => console.log(res));
  });

  return (
    <Container>
      {
        console.log(news)
      }
      <Header />
      <Main />
    </Container>
  )
}
export default App;
