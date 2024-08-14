import { Dispatch, ReactNode, SetStateAction } from 'react';

export type OmitProps = {
  inHeader?: boolean;
  columnKey?: number;
  headers?: string[];
  forwardedRef?: React.Ref<unknown>;
  className?: string;
  colSpan?: number;
  children?: ReactNode;
};

export type HeaderContextType = {
  headers: string[];
  setHeaders: Dispatch<SetStateAction<string[]>>;
};

export type TdProps = OmitProps & {
  columnKey?: number;
};
