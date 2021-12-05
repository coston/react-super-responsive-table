import React from 'react';
import T from 'prop-types';

import allowed from '../utils/allowed';

const Thead = (props) => {
  const { children } = props;

  return (
    <thead data-testid="thead" {...allowed(props)}>
      {React.cloneElement(children, { inHeader: true })}
    </thead>
  );
};

Thead.propTypes = {
  children: T.node,
};

Thead.defaultProps = {
  children: undefined,
};

export default Thead;
