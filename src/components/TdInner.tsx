import React from 'react';

import allowed from '../utils/allowed';

const TdInner = (props: any) => {
  const { headers, children, columnKey, className, colSpan } = props;

  const classes = `${className || ''} pivoted`;
  if (colSpan) {
    return <td data-testid="td" {...allowed(props)} />;
  }
  return (
    <td data-testid="td" {...allowed(props)} className={classes}>
      <div data-testid="td-before" className="tdBefore">
        {headers[columnKey]}
      </div>
      {children ?? <div>&nbsp;</div>}
    </td>
  );
};


export default TdInner;
