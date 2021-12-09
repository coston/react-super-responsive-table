import React from 'react';
import allowed from '../utils/allowed';
import {HeadersContext} from '../utils/HeadersContext';
import TdInner from './TdInner';

const Td = (props: any) => (
  <HeadersContext.Consumer>{([headers]) => <TdInner {...allowed(props)} headers={headers} />}</HeadersContext.Consumer>
);

export default Td;
