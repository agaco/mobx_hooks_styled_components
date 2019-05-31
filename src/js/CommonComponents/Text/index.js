import { branch, renderNothing } from 'recompose';

import Text from './Text';

const enhance = branch(
  ({ text, children }) => !text && !children,
  renderNothing
);

export default enhance(Text);
