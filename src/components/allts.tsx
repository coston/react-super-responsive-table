import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
  forwardRef,
  ReactNode,
  ReactElement,
  PropsWithChildren,
} from 'react';

type OmitProps = {
  inHeader?: boolean;
  columnKey?: number;
  headers?: string[];
  forwardedRef?: React.Ref<unknown>;
  className?: string;
  colSpan?: number;
  children?: ReactNode;
};

type HeaderContextType = {
  headers: string[];
  setHeaders: React.Dispatch<React.SetStateAction<string[]>>;
};

const omit = <T extends object>(obj: T, omitProps: (keyof T)[]): Partial<T> =>
  Object.keys(obj)
    .filter((key) => !omitProps.includes(key as keyof T))
    .reduce((returnObj, key) => {
      return { ...returnObj, [key]: obj[key as keyof T] };
    }, {} as Partial<T>);

const allowed = <T extends OmitProps>(props: T): Partial<T> =>
  omit(props, ['inHeader', 'columnKey', 'headers', 'forwardedRef']);

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

function HeaderProvider({ children }: PropsWithChildren<unknown>) {
  const [headers, setHeaders] = useState<string[]>([]);

  const contextValue = useMemo(() => ({ headers, setHeaders }), [headers]);

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  );
}

export { HeaderProvider, HeaderContext };

type TableProps = {
  className?: string;
} & OmitProps;

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => {
    const classes = `${className || ''} responsiveTable`;
    return (
      <table
        data-testid="table"
        {...allowed(props)}
        className={classes}
        ref={ref}
      />
    );
  }
);

Table.displayName = 'Table';

function TableWithHeaderProvider(props: TableProps) {
  return (
    <HeaderProvider>
      <Table {...props} />
    </HeaderProvider>
  );
}

function Tbody(props: OmitProps) {
  return <tbody data-testid="tbody" {...allowed(props)} />;
}

type TdProps = OmitProps & {
  columnKey?: number;
};

function Td(props: TdProps) {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('Td must be used as a child of the Table component');
  }

  const { headers } = context;

  return <TdInner {...props} headers={headers} />;
}

type TdInnerProps = TdProps & {
  headers: string[];
};

function TdInner(props: TdInnerProps) {
  const { headers, children, columnKey, className, colSpan } = props;

  const classes = `${className || ''} pivoted`;
  if (colSpan) {
    return (
      <td
        data-testid="td"
        {...(allowed(
          props
        ) as React.ThHTMLAttributes<HTMLTableHeaderCellElement>)}
      />
    );
  }
  return (
    <td
      data-testid="td"
      {...(allowed(
        props
      ) as React.ThHTMLAttributes<HTMLTableHeaderCellElement>)}
      className={classes}
    >
      <div data-testid="td-before" className="tdBefore">
        {headers[columnKey!]}
      </div>
      {children ?? <div>&nbsp;</div>}
    </td>
  );
}

function Th(props: OmitProps) {
  return (
    <th
      data-testid="th"
      {...(allowed(
        props
      ) as React.ThHTMLAttributes<HTMLTableHeaderCellElement>)}
    />
  );
}

function Thead(props: PropsWithChildren<OmitProps>) {
  const { children } = props;

  return (
    <thead data-testid="thead" {...allowed(props)}>
      {React.cloneElement(children as ReactElement, { inHeader: true })}
    </thead>
  );
}

function Tr(props: OmitProps) {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('Tr must be used as a child of the Table component');
  }

  const { headers } = context;

  return <TrInner {...props} headers={headers} />;
}

type TrInnerProps = PropsWithChildren<OmitProps> & {
  headers: string[];
};

function TrInner({ children, inHeader, ...props }: TrInnerProps) {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('TrInner must be used as a child of the Table component');
  }

  const { setHeaders } = context;

  useEffect(() => {
    if (inHeader) {
      const newHeaders = React.Children.map(
        children,
        (child) => (child as ReactElement)?.props.children
      );
      setHeaders(newHeaders as string[]);
    }
  }, [children, inHeader, setHeaders]);

  return (
    <tr data-testid="tr" {...allowed(props)}>
      {children &&
        React.Children.map(children, (child, i) =>
          child
            ? React.cloneElement(child as ReactElement, {
                key: i,
                columnKey: i,
              })
            : null
        )}
    </tr>
  );
}

export default TrInner;

export {
  TableWithHeaderProvider as Table,
  Tbody,
  Td,
  TdInner,
  Th,
  Thead,
  Tr,
  TrInner,
};
