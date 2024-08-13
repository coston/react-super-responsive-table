import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Table, Thead, Tbody, Tr, Th, Td } from '../src';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

describe('CSS Import', () => {
  it('should import the CSS file without errors', () => {
    expect(true).toBe(true);
  });
});

describe('SuperResponsiveTable CommonCase', () => {
  const setup = () => {
    const [val1, val2, val3] = [0, '', false];
    const { getAllByTestId, getByTestId, getAllByText } = render(
      <Table>
        <Thead>
          <Tr>
            <Th>Header 1</Th>
            <Th>Header 2</Th>
            <Th>Header 3</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Row 1</Td>
            <Td>Row 2</Td>
            <Td>Row 3</Td>
          </Tr>
          <Tr>
            <Td>{val1}</Td>
            <Td>{val2}</Td>
            <Td>{val3}</Td>
          </Tr>
        </Tbody>
      </Table>
    );

    return {
      getAllByText,
      getTable: getByTestId('table'),
      getThead: getByTestId('thead'),
      getTr: getAllByTestId('tr'),
      getTh: getAllByTestId('th'),
      getTbody: getByTestId('tbody'),
      getTd: getAllByTestId('td'),
      getTdBefore: getAllByTestId('td-before'),
    };
  };

  it('render the table element', () => {
    const { getTable } = setup();

    expect(getTable).toBeInTheDocument();
  });

  it('renders every thead', () => {
    const { getThead } = setup();

    expect(getThead).toBeInTheDocument();
  });

  it('renders every th', () => {
    const { getTh } = setup();

    expect(getTh.length).toBe(3);
  });

  it('renders every tr', () => {
    const { getTr } = setup();

    expect(getTr.length).toBe(3);
  });

  it('renders every tbody', () => {
    const { getTbody } = setup();

    expect(getTbody).toBeInTheDocument();
  });

  it('renders every td', () => {
    const { getTd } = setup();

    expect(getTd.length).toBe(6);
  });

  it('renders every td inner text', () => {
    const { getTdBefore } = setup();

    expect(getTdBefore.length).toBe(6);
  });

  it('renders nullish value', () => {
    const { getTd } = setup();

    expect(getTd[3].childNodes[1].textContent).toBe('0');
  });
});

describe('SuperResponsiveTable UniqueCase', () => {
  const setup = (components) => {
    const { getAllByTestId, getByTestId, getAllByText } = render(components);
    return {
      getAllByText,
      getTable: getByTestId('table'),
      getThead: getByTestId('thead'),
      getTr: getAllByTestId('tr'),
      getTh: getAllByTestId('th'),
      getTbody: getByTestId('tbody'),
      getTd: getAllByTestId('td'),
      getTdBefore: getAllByTestId('td-before'),
    };
  };

  it('Render table with an only one column', () => {
    const { getTr, getTh, getTd } = setup(
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
    );

    expect(getTr.length).toBe(2);
    expect(getTh.length).toBe(1);
    expect(getTd.length).toBe(1);
    expect(getTh[0].childNodes[0].textContent).toBe('Annual Conference');
    expect(getTd[0].childNodes[1].textContent).toBe('31');
  });

  test('Render table with colSpan attribute', () => {
    const { getByText } = render(
      <Table>
        <Thead>
          <Tr>
            <Th>Month</Th>
            <Th>Savings</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>January</Td>
            <Td>$100</Td>
          </Tr>
          <Tr>
            <Td>February</Td>
            <Td>$80</Td>
          </Tr>
          <Tr>
            <Td colSpan={2}>Sum: $180</Td>
          </Tr>
        </Tbody>
      </Table>
    );

    const spannedColumn = getByText('Sum: $180');
    expect(spannedColumn).toBeInTheDocument();
    expect(spannedColumn).toHaveAttribute('colSpan', '2');
  });
  test('Render table without any cells', () => {
    render(
      <Table>
        <Thead>
          <Tr></Tr>
        </Thead>
        <Tbody>
          <Tr></Tr>
        </Tbody>
      </Table>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();

    expect(screen.queryByRole('cell')).not.toBeInTheDocument();
    expect(screen.queryByRole('columnheader')).not.toBeInTheDocument();
  });

  test('Render table with only header and empty row', () => {
    render(
      <Table>
        <Thead>
          <Tr>
            <Th>Header 1</Th>
            <Th>Header 2</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr></Tr>
        </Tbody>
      </Table>
    );

    expect(screen.getByText('Header 1')).toBeInTheDocument();
    expect(screen.getByText('Header 2')).toBeInTheDocument();

    const tbody = screen.getAllByRole('rowgroup')[1];
    expect(tbody).toBeInTheDocument();

    expect(tbody.querySelectorAll('td').length).toBe(0);
  });

  test('Render table with conditional column', () => {
    let showColumn = true;

    const { rerender } = render(
      <Table>
        <Thead>
          <Tr>
            <Th>Header 1</Th>
            <Th>Header 2</Th>
            {showColumn && <Th>Conditional Header</Th>}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Cell 1</Td>
            <Td>Cell 2</Td>
            {showColumn && <Td>Conditional Cell</Td>}
          </Tr>
        </Tbody>
      </Table>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();

    expect(screen.getAllByText('Conditional Header')).toHaveLength(2);
    expect(screen.getAllByText('Conditional Cell')).toHaveLength(1);

    showColumn = false;
    rerender(
      <Table>
        <Thead>
          <Tr>
            <Th>Header 1</Th>
            <Th>Header 2</Th>
            {showColumn && <Th>Conditional Header</Th>}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Cell 1</Td>
            <Td>Cell 2</Td>
            {showColumn && <Td>Conditional Cell</Td>}
          </Tr>
        </Tbody>
      </Table>
    );

    expect(screen.queryByText('Conditional Header')).not.toBeInTheDocument();
    expect(screen.queryByText('Conditional Cell')).not.toBeInTheDocument();
  });

  test('Render table with conditional columns', () => {
    render(
      <Table>
        <Thead>
          <Tr>
            <Th>C1</Th>
            {false && <Th>C2</Th>}
            <Th>C3</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>V1</Td>
            {false && <Td>V2</Td>}
            <Td>V3</Td>
            <Td>V4</Td>
            <Td>V6</Td>
          </Tr>
        </Tbody>
      </Table>
    );

    expect(screen.getAllByText('C1')).toHaveLength(2);
    expect(screen.queryAllByText('C2')).toHaveLength(0);
    expect(screen.getAllByText('C3')).toHaveLength(2);

    expect(screen.getByText('V1')).toBeInTheDocument();
    expect(screen.queryByText('V2')).not.toBeInTheDocument();
    expect(screen.getByText('V3')).toBeInTheDocument();
    expect(screen.getByText('V4')).toBeInTheDocument();
    expect(screen.getByText('V6')).toBeInTheDocument();
  });

  test('Render table with more columns in header', () => {
    render(
      <Table>
        <Thead>
          <Tr>
            <Th>C1</Th>
            {false && <Th>C2</Th>}
            <Th>C3</Th>
            <Th>C4</Th>
            <Th>C5</Th>
            <Th>C6</Th>
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

    expect(screen.getAllByText('C1')).toHaveLength(2);
    expect(screen.queryByText('C2')).not.toBeInTheDocument();
    expect(screen.getAllByText('C3')).toHaveLength(2);
    expect(screen.getAllByText('C4')).toHaveLength(1);
    expect(screen.getAllByText('C5')).toHaveLength(1);
    expect(screen.getAllByText('C6')).toHaveLength(1);

    expect(screen.getByText('V1')).toBeInTheDocument();
    expect(screen.queryByText('V2')).not.toBeInTheDocument();
    expect(screen.getByText('V3')).toBeInTheDocument();
  });

  test('Table updates correctly upon change of key prop', () => {
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
    );

    const headersA = ['alpha', 'beta'];
    const headersB = ['one', 'two'];

    const { rerender } = render(<Parent headers={headersA} i={1} />);
    expect(screen.getAllByText('alpha')).toHaveLength(2);
    expect(screen.getAllByText('beta')).toHaveLength(2);
    expect(screen.queryByText('one')).not.toBeInTheDocument();
    expect(screen.queryByText('two')).not.toBeInTheDocument();

    rerender(<Parent headers={headersB} i={2} />);
    expect(screen.getAllByText('one')).toHaveLength(2);
    expect(screen.getAllByText('two')).toHaveLength(2);
    expect(screen.queryByText('alpha')).not.toBeInTheDocument();
    expect(screen.queryByText('beta')).not.toBeInTheDocument();
  });

  test('Renders rowSpan correctly', () => {
    render(
      <Table>
        <Thead>
          <Tr>
            <Td>C1</Td>
            <Td>C2</Td>
            <Td>C3</Td>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>V3</Td>
            <Td rowSpan={2}>V4</Td>
            <Td>V6</Td>
          </Tr>
          <Tr>
            <Td>V5</Td>
            <Td>V6</Td>
          </Tr>
        </Tbody>
      </Table>
    );

    const cellWithRowSpan = screen.getByText('V4');
    expect(cellWithRowSpan).toBeInTheDocument();
    expect(cellWithRowSpan).toHaveAttribute('rowSpan', '2');
  });
});
