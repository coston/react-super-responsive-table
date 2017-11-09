import React from 'react'

const provideContext = (contextKey, contextType) => {
  class ProvideContext extends React.Component {
    getChildContext() {
      const { children, ...props } = this.props
      return {
        [contextKey]: props,
      }
    }

    render() {
      return React.Children.only(this.props.children)
    }
  }

  ProvideContext.childContextTypes = {
    [contextKey]: contextType,
  }

  return ProvideContext
}

export default provideContext
