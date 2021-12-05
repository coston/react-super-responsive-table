import React, { Ref, useState } from 'react';

import { Provider } from '../utils/tableContext';

import allowed from '../utils/allowed';



const Table = ({ className, forwardedRef }: {className?: string, forwardedRef?: Ref<HTMLTableElement>}) => {
const [headers, setHeaders] = useState([]);
  const classes = `${className || ''} responsiveTable`;


  return ( <Provider value={[headers, setHeaders]}>
    <table
      data-testid="table"
      {...allowed({ className, forwardedRef })}
      className={classes}
      ref={forwardedRef}
    />
  </Provider>)
}


const TableForwardRef = React.forwardRef<HTMLTableElement>((props, ref) => (
  <Table {...props} forwardedRef={ref} />
));

TableForwardRef.displayName = Table.name;

export default TableForwardRef;
