import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from '../src/SuperResponsiveTable'

test('Render Table', () => {
  const wrapper = shallow(
    <Table>
      <Thead>
        <Tr>
          <Th>Annual Conference</Th>
          <Th>Year</Th>
          <Th>Location</Th>
          <Th>President</Th>
          <Th>Program Chair</Th>
          <Th>Conference Theme</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>31</Td>
          <Td>2017</Td>
          <Td>Alabama Community College System (ACCS)</Td>
          <Td>Mr. Toner Evans, Samford University</Td>
          <Td>Ms. Kelly Birchfield, Auburn University Montgomery</Td>
        </Tr>
      </Tbody>
    </Table>
  )
  expect(wrapper).toMatchSnapshot()
})


test('Render table with an only one column', () => {
  const wrapper = shallow(
    <Table>
      <Thead>
      <Tr>
        <Th>Annual Conference</Th>
      </Tr>
      </Thead>
      <Tbody>
      <Tr>
        <Td>31</Td>
      </Tr>
      </Tbody>
    </Table>
  )
  expect(wrapper).toMatchSnapshot()
})

test('Render table without any column', () => {
  const wrapper = shallow(
    <Table>
      <Thead>
      <Tr>
      </Tr>
      </Thead>
      <Tbody>
      <Tr>
      </Tr>
      </Tbody>
    </Table>
  )
  expect(wrapper).toMatchSnapshot()
})

test('Table updates correctly upon change of key prop', () => {
  // stateful container above
  const Parent = ({ headers, i }) => (
    <Table key={i}>
      <Thead>
      <Tr>
        <Th>{headers[0]}</Th>
        <Th>{headers[1]}</Th>
      </Tr>
      </Thead>
      <Tbody>
      <Tr>
        <Td>item 1</Td>
        <Td>item 2</Td>
      </Tr>
      </Tbody>
    </Table>
  )

  const headersA = ['alpha', 'beta']
  const headersB = ['one', 'two']

  // mount with initial headers
  const wrapper = mount(<Parent headers={headersA} i={1} />)
  expect(wrapper).toMatchSnapshot('headersA')

  // modify the headers by passing new prop, adjust key
  wrapper.setProps({ headers: headersB, i: 2 })
  expect(wrapper).toMatchSnapshot('headersB')
})