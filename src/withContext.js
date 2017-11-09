import React from 'react'

export default (contextKey, contextType) => Component => {
  class WithContext extends React.Component {
    render() {
      const props = {
        ...this.props,
        [contextKey]: this.context[contextKey],
      }
      return <Component {...props} />
    }
  }

  const displayName = Component.displayName || Component.name || 'Component'
  WithContext.displayName = `WithContext(${displayName})`

  WithContext.contextTypes = {
    [contextKey]: contextType,
  }

  return WithContext
}
