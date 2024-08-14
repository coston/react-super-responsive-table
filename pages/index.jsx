import React from 'react';
import PkgDemo from 'react-pkg-demo';

import { Table, Thead, Tbody, Tr, Th, Td } from '../src/index';

const textContent = `
## Installation

~~~
npm install react-super-responsive-table --save
~~~

## Usage

1. import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
2. Copy or import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css' into your project
3. Write your html table with the imported components.
`;

const tableCode = `
<Table>
  <Thead>
    <Tr>
      <Th>Event</Th>
      <Th>Date</Th>
      <Th>Location</Th>
      <Th>Organizer</Th>
      <Th>Theme</Th>
      <Th>Agent</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Tablescon</Td>
      <Td>9 April 2019</Td>
      <Td>East Annex</Td>
      <Td>Super Friends</Td>
      <Td>Data Tables</Td>
      <Td>Coston Perkins</Td>
    </Tr>
    <Tr>
      <Td>Capstone Data</Td>
      <Td>19 May 2019</Td>
      <Td>205 Gorgas</Td>
      <Td>Data Underground</Td>
      <Td>Data Scence</Td>
      <Td>Jason Phillips</Td>
    </Tr>
    <Tr>
      <Td>Tuscaloosa D3</Td>
      <Td>29 June 2019</Td>
      <Td>Github</Td>
      <Td>The Contributors Consortium</Td>
      <Td>Data Viz</Td>
      <Td>Coston Perkins</Td>
    </Tr>
  </Tbody>
</Table>
  `.trim();

function App() {
  return (
    <PkgDemo
      color="#ffa3b3"
      packageName="react-super-responsive-table"
      icon="⌗"
      markdown={textContent}
      prompt="Resize your browser window width to pivot this super responsive table!"
      scope={{
        Table,
        Thead,
        Tbody,
        Tr,
        Th,
        Td,
      }}
      code={tableCode}
    />
  );
}

export default App;
