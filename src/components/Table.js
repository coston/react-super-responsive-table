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
    const { className } = this.props;
    const classes = `${className || ''} responsiveTable`;

    return (
      <Provider value={headers}>
        <table
          data-testid="table"
          {...allowed(this.props)}
          className={classes}
        />
      </Provider>
    );
  }
}

Table.propTypes = {
  className: T.string,
};

Table.defaultProps = {
  className: undefined,
};

export default Table;
