import React, { useContext, useEffect } from 'react';
import T from 'prop-types';
import { HeaderContext } from '../utils/tableContext';

import allowed from '../utils/allowed';

function TrInner({ children, inHeader, ...props }) {
  const { setHeaders } = useContext(HeaderContext);

  useEffect(() => {
    if (inHeader) {
      const newHeaders = React.Children.map(
        children,
        (child) => child?.props.children
      );
      setHeaders(newHeaders);
    }
  }, [children, inHeader, setHeaders]);

  return (
    <tr data-testid="tr" {...allowed(props)}>
      {children &&
        React.Children.map(children, (child, i) =>
          child ? React.cloneElement(child, { key: i, columnKey: i }) : null
        )}
    </tr>
  );
}

export default TrInner;
