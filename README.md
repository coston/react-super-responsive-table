# react-super-responsive-table

[![Greenkeeper badge](https://badges.greenkeeper.io/ua-oira/react-super-responsive-table.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/ua-oira/react-super-responsive-table.svg)](https://travis-ci.org/ua-oira/react-super-responsive-table)
[![Coverage Status](https://coveralls.io/repos/github/ua-oira/react-super-responsive-table/badge.svg?branch=master)](https://coveralls.io/github/ua-oira/react-super-responsive-table?branch=master)
[![npm package version](https://badge.fury.io/js/react-super-responsive-table.svg)](https://www.npmjs.com/package/react-super-responsive-table)
[![npm downloads](https://img.shields.io/npm/dm/react-super-responsive-table.svg)](https://www.npmjs.com/package/react-super-responsive-table)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

React Super Responsive Table converts your table data to a user-friendly list in mobile view.

## Documentation

* [Demo & Examples](#demo--examples)
* [Installation](#installation)
* [Usage](#usage)
* [Development](#development-src-lib-and-the-build-process)
* [Contributors](#contributors)
* [License](#license)

## Demo & Examples

![demo gif](https://user-images.githubusercontent.com/7424180/34885948-324b1e6a-f787-11e7-93a7-aacac5e7e315.gif)

Live demo: [https://react-super-responsive-table.netlify.com](https://react-super-responsive-table.netlify.com)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.

## Installation

The easiest way to use react-super-responsive-table is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-super-responsive-table.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-super-responsive-table --save
```

## Usage

To use, import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'. Then, copy or import the superResponsiveTableStyles.css file into your project. Write your html table with capitol letters, and voilà!

```jsx
import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

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
		<Tr>
			<Td>30</Td>
			<Td>2016</Td>
			<Td>Samford University</Td>
			<Td>Ms. Angel Jowers, University of West Alabama</Td>
			<Td>Mr. Toner Evans, Samford University</Td>
			<Td>Academ(ia) Awards: Best Practices/Performances in IR</Td>
		</Tr>
		<Tr>
			<Td>29</Td>
			<Td>2015</Td>
			<Td>Eufaula (Wallace Community College Dothan)</Td>
			<Td>Dr. Annette Cederholm, Snead State Community College</Td>
			<Td>Ms. Angel Jowers, University of West Alabama</Td>
			<Td>Back to the Future</Td>
		</Tr>
		<Tr>
			<Td>28</Td>
			<Td>2014</Td>
			<Td>Huntsville (J.F. Drake State Community and Technical College)</Td>
			<Td>Dr. Jon C. Acker, The University of Alabama</Td>
			<Td>Dr. Annette Cederholm, Snead State Community College</Td>
			<Td>Institutional Research…and Beyond!</Td>
		</Tr>
		<Tr>
			<Td>27</Td>
			<Td>2013</Td>
			<Td>The University of Alabama</Td>
			<Td>Mr. John McIntosh, Northwest-Shoals Community College</Td>
			<Td>Dr. Jon C. Acker, The University of Alabama</Td>
			<Td>Moving the Ball Forward</Td>
		</Tr>
	</Tbody>
</Table>
```

## Using Dynamic Headers
Headers are statefully stored on first render of the table, since the library doesn't use props for them and just checks the children of the thead to build its internal list of headers upon construction. To use dynamic headers, use a key prop to ensure the components are all internally updated when you're making this kind of change.
```js
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

## Development (`src`, `dist` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled version (generated with Babel) is available in `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `dist`, run `npm run watch` (this is useful if you are working with `npm link`).

## Contributors

Super Responsive Tables are made possible by these great community members:

* [jasonphillips](https://github.com/jasonphillips)
* [coston](https://github.com/coston)
* [jorrit](https://github.com/jorrit)
* [Droow](https://github.com/droow)
* [NShahri](https://github.com/NShahri)

## Contributing

Please help turn the tables on unresponsive data! Submit any issues and/or make a pull request!

## License

MIT License

Copyright (c) 2018 The University of Alabama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
