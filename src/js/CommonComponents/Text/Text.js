import React from 'react';
import PropTypes from 'prop-types';

import { Element } from './styled';

const Text = ({ text, children, ...rest }) => (
  <Element {...rest}>
    {children || text}
  </Element>
);

Text.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default Text;
