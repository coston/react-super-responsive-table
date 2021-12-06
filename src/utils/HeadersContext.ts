import React from 'react';

export const HeadersContext = React.createContext([]);

export function headerReducer(state: any[], item: any) {
    return [...state, item]
  }

