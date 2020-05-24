import React from 'react';
import { Consumer } from '../utils/tableContext';
import TdInner from './TdInner';

const Td = (props) => (
  <Consumer>{(headers) => <TdInner {...props} headers={headers} />}</Consumer>
);

export default Td;
