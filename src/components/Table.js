import React from 'react';
import T from 'prop-types';

import { Provider } from '../utils/tableContext';

import allowed from '../utils/allowed';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: {},
    };
  }

  render() {
    const { headers } = this.state;
    const { className, forwardedRef } = this.props;
    const classes = `${className || ''} responsiveTable`;

    return (
      <Provider value={headers}>
        <table
          data-testid="table"
          {...allowed(this.props)}
          className={classes}
          ref={forwardedRef}
        />
      </Provider>
    );
  }
}

Table.propTypes = {
  className: T.string,
  forwardedRef: T.oneOfType([
    T.func,
    T.shape({ current: T.instanceOf(global.Element) }),
  ]),
};

Table.defaultProps = {
  className: undefined,
  forwardedRef: undefined,
};

const TableForwardRef = React.forwardRef((props, ref) => (
  <Table {...props} forwardedRef={ref} />
));

TableForwardRef.displayName = Table.name;

export default TableForwardRef;
