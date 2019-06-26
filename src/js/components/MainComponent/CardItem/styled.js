import styled from 'styled-components';

import CommonText from '../../../CommonComponents/Text';
// import { Button } from '@bootstrap-styled/v4';

const Button = styled(CommonText)`
 color: green;  
 cursor: pointer;
  ${props => !props.shouldDisplay && `
  display: none; 
  `}
`;

export {
  Button,
};
