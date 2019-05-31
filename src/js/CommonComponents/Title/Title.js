import React from 'react';
import PropTypes from 'prop-types';

import { Element } from './styled';

const Title = ({ text, ...rest }) =>
  <Element {...rest}>
    { text }
  </Element>;

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
