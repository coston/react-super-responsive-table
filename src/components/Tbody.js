import React from 'react';

import allowed from '../utils/allowed';

function Tbody(props) {
  return <tbody data-testid="tbody" {...allowed(props)} />;
}

export default Tbody;
