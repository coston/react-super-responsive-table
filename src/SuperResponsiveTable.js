import React from 'react'
import { Provider, Consumer } from './tableContext'
import { injectBaseStyles } from './baseStyleUtils'

const classes = ({ bem, others }) => {
  const bemArray = Array.isArray(bem) ? bem : [bem]
  const othersArray = Array.isArray(others) ? others : [others]

  const allClasses = [
    ...bemArray.map(name => `super-responsive-table__${name}`),
    ...othersArray,
  ].join(' ')

  return allClasses
}

const omit = (obj, omitProps) =>
  Object.keys(obj)
    .filter(key => omitProps.indexOf(key) === -1)
    .reduce((returnObj, key) => ({ ...returnObj, [key]: obj[key] }), {})

const allowed = props =>
  omit(props, [
    'inHeader',
    'columnKey',
    'headers',
    'withBaseStyles',
    'className',
  ])

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
    return (
      <Provider value={headers}>
        <table
          className={classes({
            bem: 'table',
            others: ['responsiveTable', this.props.className],
          })}
          data-testid="table"
          {...allowed(this.props)}
        />
      </Provider>
    )
  }
}

export const Thead = props => (
  <thead
    className={classes({ bem: 'thead', others: props.className })}
    data-testid="thead"
    {...allowed(props)}
  >
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
      <tr
        className={classes({ bem: 'tr', others: this.props.className })}
        data-testid="tr"
        {...allowed(this.props)}
      >
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

export const Th = props => (
  <th
    className={classes({ bem: 'th', others: props.className })}
    data-testid="th"
    {...allowed(props)}
  />
)
export const Tbody = props => (
  <tbody
    className={classes({ bem: 'tbody', others: props.className })}
    data-testid="tbody"
    {...allowed(props)}
  />
)

class TdInner extends React.Component {
  render() {
    if (this.props.colSpan) {
      return (
        <td
          className={classes({
            bem: 'td',
            others: this.props.className,
          })}
          data-testid="td"
          {...allowed(this.props)}
        />
      )
    }
    const { headers, children, columnKey } = this.props

    return (
      <td
        className={classes({
          bem: ['td', 'td_pivoted'],
          others: ['pivoted', this.props.className],
        })}
        data-testid="td"
        {...allowed(this.props)}
      >
        <div
          className={classes({ bem: 'th_pseudo', others: 'tdBefore' })}
          data-testid="td-before"
        >
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
