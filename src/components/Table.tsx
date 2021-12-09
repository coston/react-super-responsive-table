import React, {Ref, useState } from "react";

import { HeadersContext } from "../utils/HeadersContext";

import allowed from "../utils/allowed";

const Table = (props: {
  className?: string;
  forwardedRef?: Ref<HTMLTableElement>;
}) => {
  const [headers, setHeaders] = useState([]);
  const { className, forwardedRef } = props;
  const classes = `${className || ""} responsiveTable`;

  return (
    // @ts-ignore
    <HeadersContext.Provider value={[headers, setHeaders]}>
      <table
        data-testid="table"
        {...allowed(props)}
        className={classes}
        ref={forwardedRef}
      />
    </HeadersContext.Provider>
  );
};

const TableForwardRef = React.forwardRef<HTMLTableElement>((props, ref) => (
  <Table {...props} forwardedRef={ref} />
));

TableForwardRef.displayName = Table.name;

export default TableForwardRef;
