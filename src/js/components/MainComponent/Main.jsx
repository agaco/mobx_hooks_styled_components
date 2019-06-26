import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoriesList from './CategoriesList';
import Card from './CardItem';
import { Container, Button, CardGroup } from '@bootstrap-styled/v4';
// import {
//   Container,
// } from './styled';


function Main() {
  const sources = useSelector(state => state.news.sources);
  const [category, setCategory] = useState('');
  const filteredSources = category !== '' ? sources.filter(item => item.category === category) : [];

  return (
  <Container>
    <CategoriesList onClick={setCategory} />
    <CardGroup>
      {
        filteredSources.map(item => <Card key={item.id} item={item} />)
      }
    </CardGroup>
  </Container>
  );
}
export default Main;
