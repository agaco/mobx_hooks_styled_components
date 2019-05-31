import { branch, renderNothing } from 'recompose';
import Title from './Title';

const enhance = branch(
  ({ text }) => !text,
  renderNothing
);

export default enhance(Title);
