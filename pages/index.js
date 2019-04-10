import React from "react";
import Head from "next/head";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Browser, Terminal } from "react-window-ui";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "../src/SuperResponsiveTable.js";
import "../src/SuperResponsiveTableStyle.css";
import "./demo-styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>⌗ react-super-responsive-table</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <style>{`
      html {
        min-height: 100%;
        background: pink;
      }
      a {
          color: #600074;
      }
      h1 {
          font-size: 2.5em;
      }
      h2 {
          border-bottom: 3px solid #000;
      }
      code {
          font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
          background:rgba(255,255,255,0.5);
          color: black;
          padding: 1px;
      }
    `}</style>
              

        <div
          style={{
            fontFamily:
              "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "760px",
            padding: "1em"
          }}
        >
        <h1>⌗ react-super-responsive-table</h1>
          <p>
            <a
              style={{ borderBottom: "none", marginRight: "5px" }}
              target="_blank"
              href="https://coveralls.io/github/ua-oira/react-super-responsive-table?branch=master"
            >
              <img
                src="https://coveralls.io/repos/github/ua-oira/react-super-responsive-table/badge.svg?branch=master"
                alt="Coverage Status"
              />
            </a>
            <a
              style={{ borderBottom: "none", marginRight: "5px" }}
              target="_blank"
              href="https://travis-ci.org/ua-oira/react-super-responsive-table"
            >
              <img
                src="https://travis-ci.org/ua-oira/react-super-responsive-table.svg?branch=master"
                alt="Travis"
              />
            </a>
            <a
              style={{ borderBottom: "none", marginRight: "5px" }}
              target="_blank"
              href="https://www.npmjs.com/package/react-super-responsive-table"
            >
              <img
                src="https://badge.fury.io/js/react-super-responsive-table.svg"
                alt="npm version"
              />
            </a>
            <a
              style={{ borderBottom: "none", marginRight: "5px" }}
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
              Td
            }}
          >
            <div
              style={{
                height: "auto",
                minWidth: "100%",
                marginBottom: "2em"
              }}
            >
              <div>
              <h2>🔖Try Me</h2>
    <p>Resize your browser window width to pivot this super resposive table</p>
                <LivePreview />
              </div>
            </div>
            <h2>The Code</h2>
            <div style={{border: '5px dashed black'}}> 
            
              <LiveEditor
                style={{
                  background: "black",
                  overflow: "scroll"
                }}
              />
              <LiveError />
            </div>
          </LiveProvider>
          <br />
          <h2 id="Usage">Usage</h2>

          <p>
            <ol>
                <li><code>import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'</code></li>
                <li><code>import './superResponsiveTableStyles.css'</code>, or copy the styles into your project</li>
                <li>Write your html table with capitol letters</li>
            </ol>
          </p>


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

const Code = props => (
  <code style={{ background: "black", color: "white", padding: "1px 5px" }}>
    {props.children}
  </code>
);

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
        <Td>Crimson.js</Td>
        <Td>4/9/2018</Td>
        <Td>East Annex</Td>
        <Td>Crimson.js</Td>
        <Td>Javascript</Td>
        <Td>Coston Perkins</Td>
      </Tr>
      <Tr>
        <Td>Capstone Data</Td>
        <Td>5/19/2018</Td>
        <Td>205 Gorgas</Td>
        <Td>OIRA</Td>
        <Td>Data Scence</Td>
        <Td>Jason Phillips</Td>
      </Tr>
      <Tr>
        <Td>Tuscaloosa D3</Td>
        <Td>5/31/2018</Td>
        <Td>Monarch Cafe</Td>
        <Td>Crimson.js</Td>
        <Td>Data Viz</Td>
        <Td>Michael Fox</Td>
      </Tr>
    </Tbody>
  </Table>
`.trim();
