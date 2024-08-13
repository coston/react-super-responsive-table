import React, {
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import { HeaderContext } from '../utils/tableContext';

import allowed from '../utils/allowed';
import { OmitProps } from '../types';

type TrInnerProps = PropsWithChildren<OmitProps> & {
  headers: string[];
};

function TrInner({ children, inHeader, ...props }: TrInnerProps) {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('TrInner must be used as a child of the Table component');
  }

  const { setHeaders, headers } = context;

  useEffect(() => {
    if (inHeader) {
      const updatedHeaders = [...headers];
      React.Children.forEach(children, (child, i) => {
        if (React.isValidElement(child)) {
          updatedHeaders[i] = child.props.children;
        }
      });
      setHeaders(updatedHeaders);
    }
  }, [inHeader, children]);

  return (
    <tr data-testid="tr" {...allowed(props)}>
      {children &&
        React.Children.map(children, (child, i) =>
          React.isValidElement(child)
            ? React.cloneElement(child as ReactElement, {
                key: i,
                columnKey: i,
              })
            : null
        )}
    </tr>
  );
}

export default TrInner;
