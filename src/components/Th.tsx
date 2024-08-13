import React, { TableHTMLAttributes } from 'react';

import allowed from '../utils/allowed';

function Th(props: TableHTMLAttributes<HTMLTableCellElement>) {
  return <th data-testid="th" {...allowed(props)} />;
}

export default Th;
