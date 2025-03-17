import React from 'react';
import allowed from '../utils/allowed';
import { TbodyProps } from '../types';

function Tbody(props: TbodyProps) {
  return <tbody data-testid="tbody" {...allowed(props)} />;
}
export default Tbody;
