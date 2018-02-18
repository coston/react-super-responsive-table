import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

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
