import React from 'react'

export default (contextKey, contextType) =>
  (Component) => (
    React.createClass({
      contextTypes: {
        [contextKey]: contextType
      },

      render () {
        const props = {
          ...this.props,
          [contextKey]: this.context[contextKey]
        }
        return <Component {...props} />
      }
    })
  )
