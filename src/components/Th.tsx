import React from 'react';

import allowed from '../utils/allowed';

const Th = (props: React.HTMLProps<HTMLTableCellElement>) => <th data-testid="th" {...allowed(props)} />;

export default Th;
