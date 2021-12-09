import React from 'react';
import T from 'prop-types';

import allowed from '../utils/allowed';

const TrInner = (props: any) => {
  const { headers, children, inHeader, setHeaders } = props;
 console.log("TrInner", {headers})
  if (headers && inHeader) {
    let newHeaders = headers;
    React.Children.map(props.children, (child, i) => {
      if (child) {
        newHeaders[i] = child.props.children;
      }
    });

    setHeaders(newHeaders);
  }

  console.log({children})

  return (
    <tr data-testid="tr" {...allowed(props)}>
      {children &&
        React.Children.map(
          children,
          (child, i) =>
            child &&
            React.cloneElement(child, {
              // eslint-disable-next-line react/no-array-index-key
              key: i,
              columnKey: i,
            })
        )}
    </tr>
  );
};

TrInner.propTypes = {
  children: T.node,
  headers: T.arrayOf(T.any),
  inHeader: T.bool,
  setHeaders: T.func.isRequired,
};

TrInner.defaultProps = {
  children: undefined,
  headers: undefined,
  inHeader: undefined,
};

export default TrInner;
