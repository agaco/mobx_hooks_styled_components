import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardBlock, CardTitle, CardText } from '@bootstrap-styled/v4';
// import {
//   Container,
// } from './styled';


function CategoriesList({ onClick }) {
  const categories = useSelector(state => state.news.sources_categories);
  const sources = useSelector(state => state.news.sources);
  const [category, setCategory] = useState('');
  const filteredSources = category !== '' ? sources.filter(item => item.category === category) : [];

// function toggleDescriptonText (value) {
//   toggleDescriptionStatus(!descriptionStatus)
// }
  return (
  <Container>
      <ButtonToolbar>
        <ButtonGroup className="mr-2">
          {
            categories.length > 0 && categories.map((item, index) => {
              return (
                <Button
                  color='link'
                  key={index}
                  onClick={() => onClick(item)}
                >
                  {item}
                </Button>
              );
            })
          }
        </ButtonGroup>
      </ButtonToolbar>
  </Container>
  );
}
export default CategoriesList;
