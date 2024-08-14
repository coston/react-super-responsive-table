import React from 'react';
import allowed from '../utils/allowed';
import { OmitProps } from '../types';

function Tbody(props: OmitProps) {
  return <tbody data-testid="tbody" {...allowed(props)} />;
}
export default Tbody;
