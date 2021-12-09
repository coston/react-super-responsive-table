import React from 'react';
import { TableSection } from '../models.interface';

import allowed from '../utils/allowed';

const Thead = (props: TableSection ) => {
  const { children } = props;

  return (
    <thead data-testid="thead" {...allowed(props)}>
      {React.cloneElement(children, { inHeader: true })}
    </thead>
  );
};


export default Thead;
