import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { DATA_GET_REQUEST, SET_LOADING } from '../store/utility/constants';

import CommonContainer from '../CommonComponents/Container';
import Header from './Header';
import Main from './MainComponent'

import { fetchData, getSources } from '../../api/config';
import { getVendorsList } from './../store/actions';

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
    dispatch({
      type: SET_LOADING,
      isLoading: true,
    });
  }, [news.countries.length == 0 && news.isLoading]);

  useEffect(() => {
    getVendorsList(dispatch)
    // getSources()
      // .then(res => res && res.ok && res.json())
      // .then(res => dispatch({
      //   type: DATA_GET_REQUEST,
      //   isLoading: true,
      //   payload: res.sources,
      // }));
  }, [news.countries.length == 0 && news.isLoading]);



  return (
    <Container>
      {
        // console.log(news)
      }
      <Header />
      <Main />
    </Container>
  )
}
export default App;
