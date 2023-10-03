import React from 'react';
import T from 'prop-types';

import allowed from '../utils/allowed';

function TdInner({
  headers = {},
  children,
  columnKey,
  className = '',
  colSpan,
  ...otherProps
}) {
  const classes = `${className} pivoted`;

  if (colSpan) {
    return (
      <td
        data-testid="td"
        {...allowed({
          headers,
          children,
          columnKey,
          className,
          colSpan,
          ...otherProps,
        })}
      />
    );
  }

  return (
    <td
      data-testid="td"
      {...allowed({ headers, children, columnKey, className, colSpan })}
      className={classes}
    >
      <div data-testid="td-before" className="tdBefore">
        {headers[columnKey]}
      </div>
      {children ?? <div>&nbsp;</div>}
    </td>
  );
}

TdInner.propTypes = {
  children: T.node,
  headers: T.shape({}),
  columnKey: T.number,
  className: T.string,
  colSpan: T.oneOfType([T.number, T.string]),
};

export default TdInner;
