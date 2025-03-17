import {
  Dispatch,
  ReactNode,
  SetStateAction,
  HTMLAttributes,
  TableHTMLAttributes,
} from 'react';

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

// Component-specific types that combine OmitProps with appropriate HTML attributes
export type TrProps = OmitProps & HTMLAttributes<HTMLTableRowElement>;
export type TbodyProps = OmitProps & HTMLAttributes<HTMLTableSectionElement>;
export type TableProps = OmitProps & TableHTMLAttributes<HTMLTableElement>;
export type TheadProps = OmitProps & HTMLAttributes<HTMLTableSectionElement>;
