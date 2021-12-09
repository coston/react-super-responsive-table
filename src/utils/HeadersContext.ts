import {createContext} from 'react';

export const HeadersContext = createContext([]);

export function headerReducer(state: any[], item: any) {
    return [...state, item]
  }

