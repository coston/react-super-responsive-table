import React, { useContext } from 'react';
import TdInner from './TdInner';
import { HeaderContext } from '../utils/tableContext';
import { TdProps } from '../types';

type CombinedTdProps = TdProps & React.TdHTMLAttributes<HTMLTableCellElement>;

function Td(props: CombinedTdProps) {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('Td must be used as a child of the Table component');
  }

  const { headers } = context;

  return <TdInner {...props} headers={headers} />;
}

export default Td;
