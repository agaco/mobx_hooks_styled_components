import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styled';
import Header from './Header';
import Main from './MainComponent'

import { getVendorsList } from '../store/actions';

function App() {
  // const news = useSelector(state => state.news);
  const isLoading = useSelector(state => state.news.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    getVendorsList(dispatch);
  }, []);

  return (
    <Container isLoading={isLoading}>
      <Header />
      <Main />
    </Container>
  )
}
export default App;
