import React, { useState } from 'react';
import T from 'prop-types';

import { Provider } from '../utils/tableContext';
import allowed from '../utils/allowed';

function Table({ className = '', forwardedRef, ...otherProps }) {
  const [headers] = useState({});
  const classes = `${className} responsiveTable`;

  return (
    <Provider value={headers}>
      <table
        data-testid="table"
        {...allowed(otherProps)}
        className={classes}
        ref={forwardedRef}
      />
    </Provider>
  );
}

Table.propTypes = {
  className: T.string,
  forwardedRef: T.oneOfType([
    T.func,
    T.shape({ current: T.instanceOf(global.Element) }),
  ]),
};

const TableForwardRef = React.forwardRef((props, ref) => (
  <Table {...props} forwardedRef={ref} />
));

TableForwardRef.displayName = Table.name;

export default TableForwardRef;
