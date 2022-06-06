import React from 'react';

import { Consumer } from '../utils/tableContext';
import TrInner from './TrInner';

function Tr(props) {
  return (
    <Consumer>{(headers) => <TrInner {...props} headers={headers} />}</Consumer>
  );
}

export default Tr;
