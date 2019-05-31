import React from 'react';
import PropTypes from 'prop-types';

import { Element } from './styled';

const Paragraph = ({ text, children, ...rest }) => (
  <Element {...rest}>
    { children || text }
  </Element>
);

Paragraph.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,
};

export default Paragraph;
