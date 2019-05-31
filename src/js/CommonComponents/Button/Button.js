import React from 'react';
import PropTypes from 'prop-types';
import { Element } from './styled';

const Button = ({ text, children, ...rest }) => (
  <Element {...rest}>
    { children || text }
  </Element>
);


Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,
};

Button.defaultProps = {
  text: '',
  children: '',
};

export default Button;
