import React from 'react'
import provideContext from './provideContext'
import withContext from './withContext'

const contextShape = React.PropTypes.shape({headers: React.PropTypes.object})
const TableContext = provideContext('responsiveTable', contextShape)
const withTableContext = withContext('responsiveTable', contextShape)

export class Table extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			headers: {}
		}
	}
	render() {
		const {headers} = this.state
		const classes = (this.props.className || '') + ' responsiveTable'
		return (
			<TableContext headers={headers}>
				<table {...this.props} className={classes}/>
			</TableContext>
		)
	}
}

export const Thead = (props) => (
	<thead {...props}>
		{React.cloneElement(props.children, {inHeader: true})}
	</thead>
)

class TrInner extends React.Component {
	constructor(props) {
		super(props)
		const {headers} = props.responsiveTable
		if (headers && props.inHeader) {
			props.children.map((child, i) => {
				headers[i] = child.props.children
			})
		}
	}
	render() {
		const {children} = this.props
		return (
			<tr {...this.props}>
				{children && React.Children.map(children, (child, i) => React.cloneElement(child, {
					key: i,
					columnKey: i
				}))}
			</tr>
		)
	}
}

export const Tr = withTableContext(TrInner)
export const Th = (props) => <th {...props}/>
export const Tbody = (props) => <tbody {...props}/>

class TdInner extends React.Component {
	render() {
		if (this.props.colSpan)
			return <td {...this.props}/>
		const {responsiveTable: {
				headers
			}, children, columnKey} = this.props
		return (
			<td className="pivoted">
				<div className="tdBefore">{headers[columnKey]}</div>
				{(children !== undefined)
					? children
					: <div>&nbsp;</div>}
			</td>
		)
	}
}

export const Td = withTableContext(TdInner)
