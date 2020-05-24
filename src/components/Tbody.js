import React from 'react';

import allowed from '../utils/allowed';

const Tbody = (props) => <tbody data-testid="tbody" {...allowed(props)} />;

export default Tbody;
