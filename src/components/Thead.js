import React from 'react';
import T from 'prop-types';

import allowed from '../utils/allowed';

function Thead({ children, ...otherProps }) {
  return (
    <thead data-testid="thead" {...allowed({ children, ...otherProps })}>
      {React.cloneElement(children, { inHeader: true })}
    </thead>
  );
}

Thead.propTypes = {
  children: T.node,
};

export default Thead;
