import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import { Browser, Terminal } from 'react-window-ui'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '../dist/SuperResponsiveTable.js'
import '../dist/SuperResponsiveTableStyle.css'

class App extends Component {
  render() {
    return (
      <div>
        <LiveProvider
          code={headerCode}
          scope={{
            styled,
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
              maxWidth: '777px',
              margin: '2em auto',
            }}
          >
            <Browser>
              <LivePreview />
            </Browser>
            <div
              style={{
                height: 'auto',
                marginBottom: '2em',
              }}
            />
            <Terminal>
              <LiveEdit style={{ backgroundColor: 'black' }} />
              <LiveError />
            </Terminal>
          </div>
        </LiveProvider>
      </div>
    )
  }
}

const headerCode = `
<div>
    <h2>🔖Try Me</h2>
    <p>Resize to mobile to pivot this super resposive table</p>
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
</div>

`.trim()

const LiveEdit = styled(LiveEditor)`
  overflow: scroll;
`

ReactDOM.render(<App />, document.getElementById('app'))
