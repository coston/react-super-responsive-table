/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';

import allowed from '../utils/allowed';
import { HeaderProvider } from '../utils/tableContext';

const Table = forwardRef(({ className, ...props }, ref) => {
  const classes = `${className || ''} responsiveTable`;
  return (
    <table
      data-testid="table"
      {...allowed(props)}
      className={classes}
      ref={ref}
    />
  );
});

Table.displayName = Table.name;

function TableWithHeaderProvider(props) {
  return (
    <HeaderProvider>
      <Table {...props} />
    </HeaderProvider>
  );
}

export default TableWithHeaderProvider;
