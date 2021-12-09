import React from 'react';

import allowed from '../utils/allowed';
import { TableRow } from '../models.interface';

const TrInner = (props: TableRow) => {
  const { headers, children, inHeader, setHeaders } = props;
 console.log("TrInner", {headers})
  if (headers && inHeader) {
    let newHeaders = headers;
    React.Children.map(props.children, (child, i) => {
      if (child) {
        // @ts-ignore
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

export default TrInner;
