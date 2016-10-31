import React from 'react'

const provideContext = (contextKey, contextType) => (
  React.createClass({
    childContextTypes: {
      [contextKey]: contextType
    },

    getChildContext() {
      const { children, ...props } = this.props
      return {
        [contextKey]: props
      }
    },

    render() {
      return React.Children.only(this.props.children)
    }
  })
)

export default provideContext
