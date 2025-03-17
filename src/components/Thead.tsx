import React, { ReactElement } from 'react';

import allowed from '../utils/allowed';
import { TheadProps } from '../types';

function Thead(props: TheadProps) {
  const { children } = props;

  return (
    <thead data-testid="thead" {...allowed(props)}>
      {React.cloneElement(children as ReactElement, { inHeader: true })}
    </thead>
  );
}

export default Thead;
