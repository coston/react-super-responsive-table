import React from 'react'
import PropTypes from 'prop-types'
import provideContext from './provideContext'
import withContext from './withContext'

const contextShape = PropTypes.shape({headers: PropTypes.object})
const TableContext = provideContext('responsiveTable', contextShape)
const withTableContext = withContext('responsiveTable', contextShape)
const pick = (obj, props) => Array.prototype.reduce.call(
   props,
  (built, prop) => (
    Object.prototype.hasOwnProperty.call(obj, prop)
      ? Object.assign({}, built, {[prop]: obj[prop]})
      : built
  ), {}
)
const allowed = (props) => pick(props, ['className', 'id', 'style', 'children'])

export class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      headers: {}
    }
  }
  render () {
    const {headers} = this.state
    const classes = (this.props.className || '') + ' responsiveTable'
    return (
      <TableContext headers={headers}>
        <table {...allowed(this.props)} className={classes} />
      </TableContext>
    )
  }
}

export const Thead = (props) => (
  <thead {...allowed(props)}>
    {React.cloneElement(props.children, {inHeader: true})}
  </thead>
)

class TrInner extends React.Component {
  constructor (props) {
    super(props)
    const {headers} = props.responsiveTable
    if (headers && props.inHeader) {
      props.children.map((child, i) => {
        headers[i] = child.props.children
      })
    }
  }
  render () {
    const {children} = this.props
    return (
      <tr {...allowed(this.props)}>
        {children && React.Children.map(children, (child, i) => React.cloneElement(child, {
          key: i,
          columnKey: i
        }))}
      </tr>
    )
  }
}

export const Tr = withTableContext(TrInner)
export const Th = (props) => <th {...allowed(props)} />
export const Tbody = (props) => <tbody {...allowed(props)} />

class TdInner extends React.Component {
  render () {
    if (this.props.colSpan) { return <td {...allowed(this.props)} /> }
    const {responsiveTable: {
				headers
			}, children, columnKey} = this.props
		const classes = (this.props.className || '') + ' pivoted'
    return (
      <td className={classes}>
        <div className='tdBefore'>{headers[columnKey]}</div>
        {(children !== undefined)
					? children
					: <div>&nbsp;</div>}
      </td>
    )
  }
}

export const Td = withTableContext(TdInner)
