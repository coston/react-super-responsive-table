import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import * as baseStyleUtils from '../src/baseStyleUtils'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TBaseStyles,
} from '../src/SuperResponsiveTable'

describe('SuperResponsiveTable', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  // START OF COMPONENT SETUP
  const setup = (ui, options) => {
    const defaultUi = (
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
        </Tbody>
      </Table>
    )
    const renderResult = render(ui || defaultUi, options)
    const { getAllByTestId, getByTestId } = renderResult

    return {
      ...renderResult,
      getTable: getByTestId('table'),
      getThead: getByTestId('thead'),
      getTr: getAllByTestId('tr'),
      getTh: getAllByTestId('th'),
      getTbody: getByTestId('tbody'),
      getTd: getAllByTestId('td'),
      getTdBefore: getAllByTestId('td-before'),
    }
  }
  // END OF COMPONENT SETUP

  it('render the table element', () => {
    const { getTable } = setup()

    expect(getTable).toBeInTheDocument()
  })

  it('renders every thead', () => {
    const { getThead } = setup()

    expect(getThead).toBeInTheDocument()
  })

  it('renders every th', () => {
    const { getTh } = setup()

    expect(getTh.length).toBe(3)
  })

  it('renders every tr', () => {
    const { getTr } = setup()

    expect(getTr.length).toBe(2)
  })

  it('renders every tbody', () => {
    const { getTbody } = setup()

    expect(getTbody).toBeInTheDocument()
  })

  it('renders every td', () => {
    const { getTd } = setup()

    expect(getTd.length).toBe(3)
  })

  it('renders every td inner text', () => {
    const { getTdBefore } = setup()

    expect(getTdBefore.length).toBe(3)
  })

  it('does not call injectBaseStyles on mount', () => {
    jest.spyOn(baseStyleUtils, 'injectBaseStyles')
    setup()

    expect(baseStyleUtils.injectBaseStyles).not.toHaveBeenCalled()
  })

  describe('withBaseStyles is truthy', () => {
    it('calls injectBaseStyles on mount', () => {
      jest.spyOn(baseStyleUtils, 'injectBaseStyles')
      setup(
        <Table withBaseStyles>
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
          </Tbody>
        </Table>
      )

      expect(baseStyleUtils.injectBaseStyles).toHaveBeenCalledTimes(1)
    })

    it('calls injectBaseStyles again if props have changed', () => {
      jest.spyOn(baseStyleUtils, 'injectBaseStyles')
      const { rerender } = setup(
        <Table withBaseStyles={{ breakpoint: '40em' }}>
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
          </Tbody>
        </Table>
      )

      rerender(
        <Table withBaseStyles={{ breakpoint: '45em' }}>
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
          </Tbody>
        </Table>
      )

      expect(baseStyleUtils.injectBaseStyles).toHaveBeenCalledTimes(2)
    })
  })

  it('appends custom classes to table elements', () => {
    const { getTable, getThead, getTr, getTh, getTbody, getTd } = setup(
      <Table className="my-table">
        <Thead className="my-thead">
          <Tr className="my-tr">
            <Th className="my-th">Header 1</Th>
            <Th>Header 2</Th>
            <Th>Header 3</Th>
          </Tr>
        </Thead>
        <Tbody className="my-tbody">
          <Tr>
            <Td className="my-td">Row 1</Td>
            <Td>Row 2</Td>
            <Td>Row 3</Td>
          </Tr>
        </Tbody>
      </Table>
    )

    expect(getTable).toHaveClass('my-table')
    expect(getThead).toHaveClass('my-thead')
    expect(getTr[0]).toHaveClass('my-tr')
    expect(getTh[0]).toHaveClass('my-th')
    expect(getTbody).toHaveClass('my-tbody')
    expect(getTd[0]).toHaveClass('my-td')
  })
})

// TODO

// test('Render table with an only one column', () => {
//     const wrapper = render(
//       <Table>
//         <Thead>
//           <Tr>
//             <Th>Annual Conference</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           <Tr>
//             <Td>31</Td>
//           </Tr>
//         </Tbody>
//       </Table>
//     )
//   })

//   test('Render table without any column', () => {
//     const wrapper = render(
//       <Table>
//         <Thead>
//           <Tr></Tr>
//         </Thead>
//         <Tbody>
//           <Tr></Tr>
//         </Tbody>
//       </Table>
//     )
//   })

//   test('Render table with only header and empty row', () => {
//     let component = render(
//       <Table>
//         <Thead>
//           <Tr>
//             <Td>Test Column</Td>
//           </Tr>
//         </Thead>
//         <Tbody>
//           <Tr></Tr>
//         </Tbody>
//       </Table>
//     )
//   })

//   test('Render table with conditional column', () => {
//     let component = render(
//       <Table>
//         <Thead>
//           <Tr>{false && <Td>Test Header Column</Td>}</Tr>
//         </Thead>
//         <Tbody>
//           <Tr>{false && <Td>Test Body Column</Td>}</Tr>
//         </Tbody>
//       </Table>
//     )
//   })

//   test('Render table with conditional and unconditional column', () => {
//     let component = render(
//       <Table>
//         <Thead>
//           <Tr>
//             <Td>C1</Td>
//             {false && <Td>C2</Td>}
//             <Td>C3</Td>
//           </Tr>
//         </Thead>
//         <Tbody>
//           <Tr>
//             <Td>V1</Td>
//             {false && <Td>V2</Td>}
//             <Td>V3</Td>
//           </Tr>
//         </Tbody>
//       </Table>
//     )
//   })

//   test('Render table with more columns in body', () => {
//     let component = render(
//       <Table>
//         <Thead>
//           <Tr>
//             <Td>C1</Td>
//             {false && <Td>C2</Td>}
//             <Td>C3</Td>
//           </Tr>
//         </Thead>
//         <Tbody>
//           <Tr>
//             <Td>V1</Td>
//             {false && <Td>V2</Td>}
//             <Td>V3</Td>
//             <Td>V4</Td>
//             <Td>V6</Td>
//           </Tr>
//         </Tbody>
//       </Table>
//     )
//   })

//   test('Render table with more columns in header', () => {
//     let component = render(
//       <Table>
//         <Thead>
//           <Tr>
//             <Td>C1</Td>
//             {false && <Td>C2</Td>}
//             <Td>C3</Td>
//             <Td>C4</Td>
//             <Td>C5</Td>
//             <Td>C6</Td>
//           </Tr>
//         </Thead>
//         <Tbody>
//           <Tr>
//             <Td>V1</Td>
//             {false && <Td>V2</Td>}
//             <Td>V3</Td>
//           </Tr>
//         </Tbody>
//       </Table>
//     )
//   })

//   test('Table updates correctly upon change of key prop', () => {
//     // stateful container above
//     const Parent = ({ headers, i }) => (
//       <Table key={i}>
//         <Thead>
//           <Tr>
//             <Th>{headers[0]}</Th>
//             <Th>{headers[1]}</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           <Tr>
//             <Td>item 1</Td>
//             <Td>item 2</Td>
//           </Tr>
//         </Tbody>
//       </Table>
//     )

//     const headersA = ['alpha', 'beta']
//     const headersB = ['one', 'two']

//     // mount with initial headers
//     const wrapper = mount(<Parent headers={headersA} i={1} />)
//     expect(wrapper).toMatchSnapshot('headersA')

//     // modify the headers by passing new prop, adjust key
//     wrapper.setProps({ headers: headersB, i: 2 })
//     expect(wrapper).toMatchSnapshot('headersB')
//   })

//   test('Renders colSpan', () => {
//     let component = render(
//       <Table>
//         <Thead>
//           <Tr>
//             <Td>C1</Td>
//             <Td>C2</Td>
//             <Td>C3</Td>
//           </Tr>
//         </Thead>
//         <Tbody>
//           <Tr>
//             <Td></Td>
//             <Td colSpan="2">V4</Td>
//             <Td>V6</Td>
//           </Tr>
//         </Tbody>
//       </Table>
//     )
//   })

//   test('Renders rowSpan', () => {
//     let component = render(
//       <Table>
//         <Thead>
//           <Tr>
//             <Td>C1</Td>
//             <Td>C2</Td>
//             <Td>C3</Td>
//           </Tr>
//         </Thead>
//         <Tbody>
//           <Tr>
//             <Td>V3</Td>
//             <Td rowSpan="2">V4</Td>
//             <Td>V6</Td>
//           </Tr>
//           <Tr>
//             <Td>V4</Td>
//             <Td>V6</Td>
//           </Tr>
//         </Tbody>
//       </Table>
//     )
//   })

//   test('Renders div in empty cell', () => {
//     let component = render(
//       <Table>
//         <Thead>
//           <Tr>
//             <Td>C1</Td>
//             <Td>C2</Td>
//             <Td>C3</Td>
//           </Tr>
//         </Thead>
//         <Tbody>
//           <Tr>
//             <Td></Td>
//             <Td>V4</Td>
//             <Td>V6</Td>
//           </Tr>
//         </Tbody>
//       </Table>
//     )
//   })
