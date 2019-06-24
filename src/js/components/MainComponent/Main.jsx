import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardBlock, CardTitle, CardText } from '@bootstrap-styled/v4';
// import {
//   Container,
// } from './styled';


function Main() {
  const categories = useSelector(state => state.news.sources_categories);
  const sources = useSelector(state => state.news.sources);
  const [category, setCategory] = useState('');
  const filteredSources = category !== '' ? sources.filter(item => item.category === category) : [];


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
                  onClick={() => setCategory(item)}
                >
                  {item}
                </Button>
              );
            })
          }
        </ButtonGroup>
      </ButtonToolbar>
    <CardGroup>
      {
        filteredSources.map(item => {
          return (
            <Card key={item.id}>
              <CardBlock>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <Button>show news</Button>
              </CardBlock>
            </Card>
          )
        })
      }
    </CardGroup>
  </Container>
  );
}
export default Main;
