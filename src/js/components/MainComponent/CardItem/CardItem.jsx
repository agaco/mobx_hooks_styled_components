import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, CardGroup, CardBlock, CardTitle, CardText } from '@bootstrap-styled/v4';
import {
  Button,
} from './styled';


function CardItem({ item }) {
  const sources = useSelector(state => state.news.sources);
  const [category, setCategory] = useState('');
  const [descriptionStatus, toggleDescriptionStatus] = useState(false);

  function toggleDescriptionTextTruncate (value) {
    const ifTruncate = value.length <= 80 ? value : value.slice(0,80).trim().concat('...');
    return descriptionStatus ? value : ifTruncate;

  }
  return (
      <Card key={item.id}>
        <CardBlock>
          <CardTitle>{item.name}</CardTitle>
          <CardText>{toggleDescriptionTextTruncate(item.description)}</CardText>
          {/*<CardText>{!descriptionStatus ? item.description.slice(0,100).trim().concat('...') : item.description}</CardText>*/}
          <Button shouldDisplay={item.description.length >= 80} onClick={() => toggleDescriptionStatus(!descriptionStatus)} text='show more'/>
        </CardBlock>
      </Card>
  );
}
export default CardItem;
