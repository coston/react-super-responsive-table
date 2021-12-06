/* eslint-disable */
import React from 'react';
import Head from 'next/head';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { Table, Thead, Tbody, Tr, Th, Td, Ham } from 'react-super-responsive-table';

class App extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>⌗ react-super-responsive-table</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />f
        </Head>
        <div
          style={{
            fontFamily:
              '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '900px',
            padding: '1em',
          }}
        >
          <h1>⌗ react-super-responsive-table</h1>
          <Ham/>
          <p>
            <a
              style={{ borderBottom: 'none', marginRight: '5px' }}
              target="_blank"
              href="https://coveralls.io/github/coston/react-super-responsive-table?branch=master"
            >
              <img
                src="https://coveralls.io/repos/github/coston/react-super-responsive-table/badge.svg?branch=master"
                alt="Coverage Status"
              />
            </a>
            <a
              style={{ borderBottom: 'none', marginRight: '5px' }}
              target="_blank"
              href="https://travis-ci.org/coston/react-super-responsive-table"
            >
              <img
                src="https://travis-ci.org/coston/react-super-responsive-table.svg?branch=master"
                alt="Travis"
              />
            </a>
            <a
              style={{ borderBottom: 'none', marginRight: '5px' }}
              target="_blank"
              href="https://www.npmjs.com/package/react-super-responsive-table"
            >
              <img
                src="https://badge.fury.io/js/react-super-responsive-table.svg"
                alt="npm version"
              />
            </a>
            <a
              style={{ borderBottom: 'none', marginRight: '5px' }}
              target="_blank"
              href="https://www.npmjs.com/package/react-super-responsive-table"
            >
              <img
                src="https://img.shields.io/npm/dm/react-super-responsive-table.svg"
                alt="npm"
              />
            </a>
          </p>
          <LiveProvider
            code={headerCode}
            scope={{
              Table,
              Thead,
              Tbody,
              Tr,
              Th,
              Td,
            }}
          >
            <div
              style={{
                height: 'auto',
                minWidth: '100%',
                marginBottom: '2em',
              }}
            >
              <div>
                <h2>Try Me</h2>
                <p>
                  Resize your browser window width to pivot this super
                  responsive table
                </p>
                <LivePreview />
              </div>
            </div>
            <h2>Live Code</h2>
            <div style={{ border: '5px dashed black' }}>
              <LiveEditor
                theme={theme}
                style={{
                  background: 'black',
                  overflow: 'scroll',
                }}
              />
              <LiveError />
            </div>
          </LiveProvider>
          <br />
          <h2>Installation</h2>
          <p>
            <code>npm i react-super-responsive-table</code>
          </p>
          <h2 id="Usage">Usage</h2>
          <div>
            <ol>
              <li>
                <code>
                  import {`{Table, Thead, Tbody, Tr, Th, Td}`} from
                  'react-super-responsive-table'
                </code>
              </li>
              <li>
                <code>
                  import
                  'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
                </code>
              </li>
              <li>Write your html table with the imported components</li>
            </ol>
          </div>

          <h2>Github</h2>
          <p>
            <a href="https://github.com/ua-oira/react-super-responsive-table">
              View project on GitHub
            </a>
          </p>
          <div className="hint" />
        </div>
      </div>
    );
  }
}

export default App;

const Code = (props) => (
  <code style={{ background: 'black', color: 'white', padding: '1px 5px' }}>
    {props.children}
  </code>
);

const theme /*: PrismTheme */ = {
  plain: {
    color: '#FFA3B3',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
      style: {
        color: '#6c6783',
      },
    },
    {
      types: ['tag', 'operator'],
      style: {
        color: '#fff',
      },
    },
  ],
};

const headerCode = `
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