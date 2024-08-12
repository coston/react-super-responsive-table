import React, { createContext, useState, useMemo } from 'react';

const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [headers, setHeaders] = useState([]);

  const contextValue = useMemo(() => ({ headers, setHeaders }), [headers]);

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  );
}

export { HeaderProvider, HeaderContext };
