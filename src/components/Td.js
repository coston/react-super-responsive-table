import React, { useContext } from 'react';
import TdInner from './TdInner';
import { HeaderContext } from '../utils/tableContext';

function Td(props) {
  const { headers } = useContext(HeaderContext);

  return <TdInner {...props} headers={headers} />;
}

export default Td;
