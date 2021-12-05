import React from 'react';

import allowed from '../utils/allowed';

const Tbody = (props: any) => <tbody data-testid="tbody" {...allowed(props)} />;

export default Tbody;
