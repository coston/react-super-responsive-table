import React from 'react';

import allowed from '../utils/allowed';

const Th = (props: any) => <th data-testid="th" {...allowed(props)} />;

export default Th;
