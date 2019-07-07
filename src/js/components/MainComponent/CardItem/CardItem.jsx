import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getDataByTitle } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Card, CardBlock, Button, CardText } from '@bootstrap-styled/v4';
import {
  Toggler,
  Title,
} from './styled';


function CardItem({ item }) {
  const [descriptionStatus, toggleDescriptionStatus] = useState(false);
  const dispatch = useDispatch();

  function toggleDescriptionTextTruncate (value) {
    const ifTruncate = value.length <= 50 ? value : value.slice(0,50).trim().concat('...');
    return descriptionStatus ? value : ifTruncate;

  }
  return (
      <Card key={item.id} width="24%" >
        <CardBlock>
          <Title>{item.name}</Title>
          <CardText>{toggleDescriptionTextTruncate(item.description)}</CardText>
          <Toggler
            shouldDisplay={item.description.length >= 50}
            onClick={() => toggleDescriptionStatus(!descriptionStatus)}
            text={descriptionStatus ? 'Show less' : 'Show more'}
          />
          <Button
            onClick={() => getDataByTitle(dispatch, item.id)}
          >
            Display news
          </Button>
        </CardBlock>
      </Card>
  );
}

CardItem.propTypes = {
  item: PropTypes.object,
  descriptionStatus: PropTypes.bool,
};
export default CardItem;
