import { forwardRef } from 'react';
import { TableProps } from '../types';
import { allowed } from '../utils/allowed';
import React from 'react';
import { HeaderProvider } from '../utils/tableContext';

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => {
    const classes = `${className || ''} responsiveTable`;
    return (
      <table
        data-testid="table"
        {...allowed(props)}
        className={classes}
        ref={ref}
      />
    );
  }
);

Table.displayName = 'Table';

function TableWithHeaderProvider(props: TableProps) {
  return (
    <HeaderProvider>
      <Table {...props} />
    </HeaderProvider>
  );
}

export default TableWithHeaderProvider;
