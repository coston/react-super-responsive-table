# react-super-responsive-table

[![Greenkeeper badge](https://badges.greenkeeper.io/ua-oira/react-super-responsive-table.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/ua-oira/react-super-responsive-table/badge.svg?branch=master)](https://coveralls.io/github/ua-oira/react-super-responsive-table?branch=master)
[![npm package version](https://badge.fury.io/js/react-super-responsive-table.svg)](https://www.npmjs.com/package/react-super-responsive-table)
[![npm downloads](https://img.shields.io/npm/dm/react-super-responsive-table.svg)](https://www.npmjs.com/package/react-super-responsive-table)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

react-super-responsive-table converts your table data to a user-friendly list in mobile view.

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Using Dynamic Headers](#using-dynamic-headers)
- [Styling](#styling)
- [Contributors](#Contributors)
- [Contributing](#contributing)
- [License](#license)

## Demo

![Demo Gif](https://user-images.githubusercontent.com/7394331/76912688-b74d7280-68ef-11ea-8ef5-65595e9fe440.gif)

Live demo: [https://react-super-responsive-table.netlify.com](https://react-super-responsive-table.netlify.com)

## Installation

```
npm install react-super-responsive-table --save
```

## Usage

1. `import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'`
2. To enable the base table styles, set the `withBaseStyles` prop on the `Table` component. You may optionally use it to define a custom breakpoint: `<Table withBaseStyles={{ breakpoint: '45em' }} />`.
3. Write your html table with the imported components.

```jsx
import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

export default function TableExample(props) {
  return (
    <Table withBaseStyles>
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
  )
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

## Styling

All the underlying table elements have [BEM class names](https://en.bem.info/methodology/naming-convention/) that you can use to target each element for styling.

```html
<table class="super-responsive-table__table">
  <thead class="super-responsive-table__thead">
    <tr class="super-responsive-table__tr">
      <th class="super-responsive-table__th" />
    </tr>
  </thead>
  <tbody class="super-responsive-table__tbody">
    <tr class="super-responsive-table__tr">
      <td class="super-responsive-table__td" />
    </tr>
  </tbody>
</table>
```

Once the table has pivoted into its side-by-side layout, the `<th>` and `<td>` elements will also be appended the `super-responsive-table__th_pivoted` and `super-responsive-table__td_pivoted` modifier class names respectively.

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

## Contributing

Please help turn the tables on unresponsive data! Submit an issue and/or make a pull request!

## License

Licensed under the MIT license.
