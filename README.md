# react-super-responsive-table

[![Coverage Status](https://coveralls.io/repos/github/coston/react-super-responsive-table/badge.svg?branch=master)](https://coveralls.io/github/coston/react-super-responsive-table?branch=master)
[![npm downloads](https://img.shields.io/npm/dm/react-super-responsive-table.svg)](https://www.npmjs.com/package/react-super-responsive-table)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

react-super-responsive-table converts your table data to a user-friendly list in mobile view.

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Using Dynamic Headers](#using-dynamic-headers)
- [Contributors](#Contributors)
- [Contributing](#contributing)
- [License](#license)

## Demo

![Demo Gif](https://user-images.githubusercontent.com/7424180/55982530-baab9900-5c5e-11e9-97c0-0336c5889504.gif)

Live demo: [https://react-super-responsive-table.netlify.com](https://react-super-responsive-table.netlify.com)

## Installation

```
npm install react-super-responsive-table --save
```

## Usage

1. `import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'`
2. Copy or import `react-super-responsive-table/dist/SuperResponsiveTableStyle.css` into your project
3. Write your html table with the imported components.

```jsx
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function TableExample(props) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Event</Th>
          <Th>Date</Th>
          <Th>Location</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Tablescon</Td>
          <Td>9 April 2019</Td>
          <Td>East Annex</Td>
        </Tr>
        <Tr>
          <Td>Capstone Data</Td>
          <Td>19 May 2019</Td>
          <Td>205 Gorgas</Td>
        </Tr>
        <Tr>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
```

## Using Dynamic Headers

Headers are statefully stored on first render of the table, since the library doesn't use props for them and just checks the children of the thead to build its internal list of headers upon construction. To use dynamic headers, use a key prop to ensure the components are all internally updated when you're making this kind of change.

```jsx
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
```

## Contributors

Super Responsive Tables are made possible by these great community members:

- [coston](https://github.com/coston)
- [jasonphillips](https://github.com/jasonphillips)
- [jorrit](https://github.com/jorrit)
- [Droow](https://github.com/droow)
- [NShahri](https://github.com/NShahri)
- [PicchiKevin](https://github.com/PicchiKevin)
- [alexandra1331](https://github.com/alexandra1331)
- [dragos-rosca](https://github.com/dragos-rosca)
- [galacemiguel](https://github.com/galacemiguel)
- [themichailov](https://github.com/themichailov)
- [luizeboli](https://github.com/luizeboli)
- [thiagotakehana](https://github.com/thiagotakehana)
- [wedvich](https://github.com/wedvich)

## Contributing

Please help turn the tables on unresponsive data! Submit an issue and/or make a pull request. Check the [projects board](https://github.com/coston/react-super-responsive-table/projects) for tasks to do.

## License

Licensed under the MIT license.
