import React from 'react';

import allowed from '../utils/allowed';

const Th = (props) => <th data-testid="th" {...allowed(props)} />;

export default Th;
