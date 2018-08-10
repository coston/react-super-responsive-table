import React from 'react'
import createReactContext from 'create-react-context'

// use the polyfill only if Context API not available (react<16)
const createContext = React.createContext || createReactContext

const { Provider, Consumer } = React.createContext({})
export { Provider, Consumer }
