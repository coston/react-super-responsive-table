# Super Responsive Table

The mission is to develop a better react table component.

Task List:
- [ ] importable table component
- [ ] generic style handling for table component
- [ ] json to table
- [ ] csv to table



## Demo & Examples

Live demo: [ua-oira.github.io/react-super-responsive-table](http://ua-oira.github.io/react-super-responsive-table/)

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

__EXPLAIN USAGE HERE__

```
import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

...
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
			<Td />
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
...

```

### Properties

* __DOCUMENT PROPERTIES HERE__

### Notes

__ADDITIONAL USAGE NOTES__


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT License

Copyright (c) The University of Alabama

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
