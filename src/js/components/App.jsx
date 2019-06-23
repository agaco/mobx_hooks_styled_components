import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styled';
import Header from './Header';
import Main from './MainComponent'

import { getVendorsList } from '../store/actions';

function App() {
  const news = useSelector(state => state.news);
  const isLoading = useSelector(state => state.news.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    getVendorsList(dispatch);
  }, []);
  const sportsCategory = news && news.sources.length > 0 && news.sources.filter(item => item.category === 'sports');

  return (
    <Container isLoading={isLoading}>
      <Header />
      {
        sportsCategory.length > 0 && sportsCategory.map((item, index) => {
          return (
            <div key={index}>{item.name}</div>
          )
        })
      }

      <Main />
    </Container>
  )
}
export default App;
