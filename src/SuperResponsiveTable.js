import React from 'react'
import { Provider, Consumer } from './tableContext'
import { injectBaseStyles } from './baseStyleUtils'

const omit = (obj, omitProps) =>
  Object.keys(obj)
    .filter(key => omitProps.indexOf(key) === -1)
    .reduce((returnObj, key) => ({ ...returnObj, [key]: obj[key] }), {})

const allowed = props =>
  omit(props, ['inHeader', 'columnKey', 'headers', 'withBaseStyles'])

export class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      headers: {},
    }
  }

  componentDidMount() {
    if (this.props.withBaseStyles) {
      injectBaseStyles()
    }
  }

  render() {
    const { headers } = this.state
    const classes = (this.props.className || '') + ' responsiveTable'
    return (
      <Provider value={headers}>
        <table
          data-testid="table"
          {...allowed(this.props)}
          className={classes}
        />
      </Provider>
    )
  }
}

export const Thead = props => (
  <thead data-testid="thead" {...allowed(props)}>
    {React.cloneElement(props.children, { inHeader: true })}
  </thead>
)

class TrInner extends React.Component {
  constructor(props) {
    super(props)
    const { headers } = props
    if (headers && props.inHeader) {
      React.Children.map(props.children, (child, i) => {
        if (child) {
          headers[i] = child.props.children
        }
      })
    }
  }
  render() {
    const { children } = this.props
    return (
      <tr data-testid="tr" {...allowed(this.props)}>
        {children &&
          React.Children.map(
            children,
            (child, i) =>
              child &&
              React.cloneElement(child, {
                key: i,
                columnKey: i,
              })
          )}
      </tr>
    )
  }
}

export const Tr = props => (
  <Consumer>{headers => <TrInner {...props} headers={headers} />}</Consumer>
)

export const Th = props => <th data-testid="th" {...allowed(props)} />
export const Tbody = props => <tbody data-testid="tbody" {...allowed(props)} />

class TdInner extends React.Component {
  render() {
    if (this.props.colSpan) {
      return <td data-testid="td" {...allowed(this.props)} />
    }
    const { headers, children, columnKey } = this.props
    const classes = (this.props.className || '') + ' pivoted'
    return (
      <td data-testid="td" {...allowed(this.props)} className={classes}>
        <div data-testid="td-before" className="tdBefore">
          {headers[columnKey]}
        </div>
        {children || <div>&nbsp;</div>}
      </td>
    )
  }
}

export const Td = props => (
  <Consumer>{headers => <TdInner {...props} headers={headers} />}</Consumer>
)
