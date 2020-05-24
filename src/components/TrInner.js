import React from 'react';
import T from 'prop-types';

import allowed from '../utils/allowed';

class TrInner extends React.Component {
  constructor(props) {
    super(props);
    const { headers } = props;
    if (headers && props.inHeader) {
      React.Children.map(props.children, (child, i) => {
        if (child) {
          headers[i] = child.props.children;
        }
      });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <tr data-testid="tr" {...allowed(this.props)}>
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
  }
}

TrInner.propTypes = {
  children: T.node,
  headers: T.shape({}),
  inHeader: T.bool,
};

TrInner.defaultProps = {
  children: undefined,
  headers: undefined,
  inHeader: undefined,
};

export default TrInner;
