import styled from 'styled-components';
import { CardTitle } from '@bootstrap-styled/v4';
import CommonText from '../../../CommonComponents/Text';


const Button = styled(CommonText)`
 color: green;  
 cursor: pointer;
  ${props => !props.shouldDisplay && `
  display: none; 
  `}
`;
const Title = styled(CardTitle)`
min-height: 45px;
font-size: 25px;
`;
export {
  Button,
  Title,
};
