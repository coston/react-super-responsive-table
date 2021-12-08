import React from 'react';
import allowed from '../utils/allowed';

const TrInner = (props: any) => {
  const { headers, setHeaders, inHeader, children } = props;


    if (headers && inHeader) {
      React.Children.map(props.children, (child, i) => {
        if (child) {
          setHeaders((preveState: any[]) => (Object.assign([], preveState, {[i]: child.props.children})))

        }
      });
    }


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
