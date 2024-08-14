import React, { PropsWithChildren, ReactElement } from 'react';

import allowed from '../utils/allowed';
import { OmitProps } from '../types';

function Thead(props: PropsWithChildren<OmitProps>) {
  const { children } = props;

  return (
    <thead data-testid="thead" {...allowed(props)}>
      {React.cloneElement(children as ReactElement, { inHeader: true })}
    </thead>
  );
}

export default Thead;
