import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoriesList from './CategoriesList';
import Card from './CardItem';
import { Container } from '@bootstrap-styled/v4';
import {
  Wrapper,
} from './styled';


function Main() {
  const sources = useSelector(state => state.news.sources);
  const [category, setCategory] = useState('');
  const filteredSources = category !== '' ? sources.filter(item => item.category === category) : [];



  return (
  <Container>
    <CategoriesList onClick={setCategory} />
    <Wrapper>
      {
        filteredSources.map(item => <Card key={item.id} item={item} />)
      }
    </Wrapper>
  </Container>
  );
}
export default Main;
