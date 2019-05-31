import React from 'react';
import { string, any } from 'prop-types';

import { Element } from './styled';

const Link = ({ text, children, ...rest }) => (
  <Element {...rest}>
    {text || children}
  </Element>
);


Link.propTypes = {
  text: string,
  children: any,
};

export default Link;
