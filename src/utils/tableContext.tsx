import React, {
  createContext,
  useState,
  useMemo,
  PropsWithChildren,
} from 'react';

type HeaderContextType = {
  headers: string[];
  setHeaders: React.Dispatch<React.SetStateAction<string[]>>;
};

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
