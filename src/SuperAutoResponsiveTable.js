import React from 'react';

import { Table, Tbody, Td, Th, Thead, Tr } from './SuperResponsiveTable'

const getType = el => el.type;

const makeTable = (tableChildren) => (
  <Table>
    {Array.isArray(tableChildren) ?
      tableChildren.map(child => {
        if (getType(child) === 'thead') {
          return makeThead(child.props.children);
        }
        if (getType(child) === 'tbody') {
          return makeTbody(child.props.children);
        }
        return child;
      })
      :
      getType(tableChildren) === 'thead' ? (
          makeThead(tableChildren.props.children)
        )
        :
        tableChildren
    }
  </Table>
);
const makeTbody = (tbodyChildren) => (
  <Tbody>
    {Array.isArray(tbodyChildren) ?
      tbodyChildren.map((child, key) => {
        if (getType(child) === 'tr') {
          return makeTbodyTr(child.props.children, key)
        }
      })
      :
      getType(tbodyChildren) === 'tr' ?
        makeTbodyTr(tbodyChildren.props.children, 0)
        :
        tbodyChildren
    }
  </Tbody>
)
const makeThead = (theadChildren) => (
  <Thead>
    {Array.isArray(theadChildren) ?
      
      theadChildren.map((child, key) => {
        if (getType(child) === 'tr') {
          return makeTheadTr(child.props.children, key)
        }
      })
      :
      getType(theadChildren) === 'tr' ? (
          makeTheadTr(theadChildren.props.children, 0)
        )
        :
        theadChildren
    }
  </Thead>
);
const makeTbodyTr = (tbodyTrChildren, key) => (
  <Tr key={key} columnKey={key}>
    {Array.isArray(tbodyTrChildren) ?
      tbodyTrChildren.map(child => {
        if (getType(child) === 'td') {
          return makeTbodyTd(child.props.children, key)
        }
      })
      :
      getType(tbodyTrChildren) === 'td' ?
        makeTbodyTd(tbodyTrChildren.props.children, key)
        :
        tbodyTrChildren
    }
  </Tr>
)
const makeTheadTr = (theadTrChildren, key) => (
  <Tr key={key} columnKey={key}>
    {Array.isArray(theadTrChildren) ?
      theadTrChildren.map(child => {
        if (getType(child) === 'th') {
          return makeTheadTh(child.props.children, key)
        }
      })
      :
      getType(theadTrChildren) === 'th' ?
        makeTheadTh(theadTrChildren.props.children, key)
        :
        theadTrChildren
    }
  </Tr>
);
const makeTbodyTd = (tbodyTdChildren, key) => (
  <Td>
    {tbodyTdChildren}
  </Td>
);
const makeTheadTh = (theadThChildren, key) => (
  <Th>
    {theadThChildren}
  </Th>
)

const findTable = (props) => {
  const { children } = props;
  if (getType(children) === 'table') {
    return makeTable(children.props.children)
  } else {
    return React.createElement(children.type, {...props}, findTable(children.props))
  }
};

export class AutoTableWrapper extends React.Component {
  render() {
    const { props } = this;
    const { children } = props;
    if (children) {
      return findTable(props);
    } else {
      return "Auto Table Requires Children To Work"
    }
  }
}
