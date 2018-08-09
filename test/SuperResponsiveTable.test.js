import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from '../src/SuperResponsiveTable'
import renderer from 'react-test-renderer';

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

test('Render table with only header and empty row', () => {
  let component = renderer.create(
    <Table>
      <Thead>
      <Tr>
        <Td>Test Column</Td>
      </Tr>
      </Thead>
      <Tbody>
      <Tr>
      </Tr>
      </Tbody>
    </Table>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

