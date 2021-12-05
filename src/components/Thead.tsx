import React from 'react';

import allowed from '../utils/allowed';

const Thead = (props: any) => {
  const { children } = props;

  return (
    <thead data-testid="thead" {...allowed(props)}>
      {React.cloneElement(children, { inHeader: true })}
    </thead>
  );
};


export default Thead;
