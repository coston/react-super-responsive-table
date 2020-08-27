import React from 'react';
import T from 'prop-types';

import allowed from '../utils/allowed';

const TdInner = (props) => {
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

TdInner.propTypes = {
  children: T.node,
  headers: T.shape({}),
  columnKey: T.number,
  className: T.string,
  colSpan: T.oneOfType([T.number, T.string]),
};

TdInner.defaultProps = {
  children: undefined,
  headers: undefined,
  columnKey: undefined,
  className: undefined,
  colSpan: undefined,
};

export default TdInner;
