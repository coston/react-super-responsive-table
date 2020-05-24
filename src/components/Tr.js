import React from 'react';

import { Consumer } from '../utils/tableContext';
import TrInner from './TrInner';

const Tr = (props) => (
  <Consumer>{(headers) => <TrInner {...props} headers={headers} />}</Consumer>
);

export default Tr;
