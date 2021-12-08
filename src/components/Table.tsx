import React, { Ref,useState } from "react";

import { HeadersContext} from "../utils/HeadersContext";

import allowed from "../utils/allowed";

const Table = ({
  className,
  forwardedRef,
}: {
  className?: string;
  forwardedRef?: Ref<HTMLTableElement>;
}) => {
   const classes = `${className || ""} responsiveTable`;
  const [headers, setHeaders] = useState([])

  console.log(headers)
   return (
    // @ts-ignore
    <HeadersContext.Provider value={[headers, setHeaders]}>
      <table
        data-testid="table"
        {...allowed({ className, forwardedRef })}
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
