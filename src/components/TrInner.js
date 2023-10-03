import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import allowed from '../utils/allowed';

function TrInner({ children, headers: initialHeaders = {}, inHeader }) {
  const [localHeaders, setLocalHeaders] = useState(initialHeaders);

  useEffect(() => {
    if (initialHeaders && inHeader) {
      const updatedHeaders = { ...initialHeaders };

      React.Children.map(children, (child, i) => {
        if (child) {
          updatedHeaders[i] = child.props.children;
        }
      });

      setLocalHeaders(updatedHeaders);
    }
  }, [children, initialHeaders, inHeader]);

  return (
    <tr
      data-testid="tr"
      {...allowed({ children, headers: localHeaders, inHeader })}
    >
      {children &&
        React.Children.map(children, (child, i) =>
          // eslint-disable-next-line react/no-array-index-key
          child ? React.cloneElement(child, { key: i, columnKey: i }) : null
        )}
    </tr>
  );
}

TrInner.propTypes = {
  children: T.node,
  headers: T.shape({}),
  inHeader: T.bool,
};

export default TrInner;
