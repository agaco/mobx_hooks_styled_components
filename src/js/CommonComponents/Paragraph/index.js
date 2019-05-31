import { branch, renderNothing } from 'recompose';
import Paragraph from './Paragraph';

const enhance = branch(
  ({ text, children, dangerouslySetInnerHTML }) => !(text || children || dangerouslySetInnerHTML),
  renderNothing
);

export default enhance(Paragraph);
