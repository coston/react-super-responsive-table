import React from 'react';

import {HeadersContext} from '../utils/HeadersContext';
import TrInner from './TrInner';

const Tr = (props: any) => (
  // @ts-ignore
  <HeadersContext.Consumer>{({headers}) => <TrInner {...props} headers={headers} setHeaders={headers} />}</HeadersContext.Consumer>
);

export default Tr;
