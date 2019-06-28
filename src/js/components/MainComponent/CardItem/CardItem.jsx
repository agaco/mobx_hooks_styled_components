import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeTheme } from 'bootstrap-styled';
import { Card, CardBlock, CardTitle, CardText } from '@bootstrap-styled/v4';
import {
  Button,
  Title,
} from './styled';


function CardItem({ item }) {
  const [descriptionStatus, toggleDescriptionStatus] = useState(false);

  function toggleDescriptionTextTruncate (value) {
    const ifTruncate = value.length <= 50 ? value : value.slice(0,50).trim().concat('...');
    return descriptionStatus ? value : ifTruncate;

  }
  return (
      <Card key={item.id} width="24%">
        <CardBlock>
          <Title>{item.name}</Title>
          <CardText>{toggleDescriptionTextTruncate(item.description)}</CardText>
          <Button
            shouldDisplay={item.description.length >= 50}
            onClick={() => toggleDescriptionStatus(!descriptionStatus)}
            text={descriptionStatus ? 'show less' : 'show more'} />
        </CardBlock>
      </Card>
  );
}

CardItem.propTypes = {
  item: PropTypes.object,
  descriptionStatus: PropTypes.bool,
};
export default CardItem;
