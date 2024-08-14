import React, { useContext } from 'react';
import TrInner from './TrInner';
import { HeaderContext } from '../utils/tableContext';
import { OmitProps } from '../types';

function Tr(props: OmitProps) {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('Tr must be used as a child of the Table component');
  }

  const { headers } = context;

  return <TrInner {...props} headers={headers} />;
}

export default Tr;
