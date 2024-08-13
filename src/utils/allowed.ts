import { OmitProps } from '../types';

export const allowed = ({
  inHeader,
  columnKey,
  headers,
  forwardedRef,
  ...rest
}: OmitProps) => {
  return rest;
};

export default allowed;
