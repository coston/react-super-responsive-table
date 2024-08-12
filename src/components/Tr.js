import React, { useContext } from 'react';
import TrInner from './TrInner';
import { HeaderContext } from '../utils/tableContext';

function Tr(props) {
  const { headers } = useContext(HeaderContext);

  return <TrInner {...props} headers={headers} />;
}

export default Tr;
