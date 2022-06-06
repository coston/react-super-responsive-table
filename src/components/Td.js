import React from 'react';
import { Consumer } from '../utils/tableContext';
import TdInner from './TdInner';

function Td(props) {
  return (
    <Consumer>{(headers) => <TdInner {...props} headers={headers} />}</Consumer>
  );
}

export default Td;
