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

test('Render table with conditional column', () => {
  let component = renderer.create(
    <Table>
      <Thead>
      <Tr>
        {false && <Td>Test Header Column</Td>}
      </Tr>
      </Thead>
      <Tbody>
      <Tr>
        {false && <Td>Test Body Column</Td>}
      </Tr>
      </Tbody>
    </Table>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('Render table with conditional and unconditional column', () => {
  let component = renderer.create(
    <Table>
      <Thead>
      <Tr>
        <Td>C1</Td>
        {false && <Td>C2</Td>}
        <Td>C3</Td>
      </Tr>
      </Thead>
      <Tbody>
      <Tr>
        <Td>V1</Td>
        {false && <Td>V2</Td>}
        <Td>V3</Td>
      </Tr>
      </Tbody>
    </Table>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('Render table with more columns in body', () => {
  let component = renderer.create(
    <Table>
      <Thead>
      <Tr>
        <Td>C1</Td>
        {false && <Td>C2</Td>}
        <Td>C3</Td>
      </Tr>
      </Thead>
      <Tbody>
      <Tr>
        <Td>V1</Td>
        {false && <Td>V2</Td>}
        <Td>V3</Td>
        <Td>V4</Td>
        <Td>V5</Td>
        <Td>V6</Td>
      </Tr>
      </Tbody>
    </Table>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('Render table with more columns in header', () => {
  let component = renderer.create(
    <Table>
      <Thead>
      <Tr>
        <Td>C1</Td>
        {false && <Td>C2</Td>}
        <Td>C3</Td>
        <Td>C4</Td>
        <Td>C5</Td>
        <Td>C6</Td>
      </Tr>
      </Thead>
      <Tbody>
      <Tr>
        <Td>V1</Td>
        {false && <Td>V2</Td>}
        <Td>V3</Td>
      </Tr>
      </Tbody>
    </Table>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
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