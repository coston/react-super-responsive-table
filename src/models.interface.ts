
export interface TableSection extends React.HTMLProps<HTMLTableSectionElement>{
    children: any;
    inHeader: boolean;
  }

  export interface TableRow extends React.HTMLProps<HTMLTableRowElement>{
    children: any;
    inHeader: boolean;
    setHeaders: any;
  }