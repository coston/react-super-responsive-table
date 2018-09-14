// example Root component
import React from 'react'
import { StyleProvider } from 'mdx-go'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '../dist/SuperResponsiveTable.js'


const components = {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
}

const theme = {
  LiveCode: {
    borderRadius: '4px',
  },
  LiveEditor: {
    color: '#4BD965',
    backgroundColor: 'black'
  }
}

export const Root = props =>
  <StyleProvider css={someCSS} components={components} theme={theme}>
  <div style={{marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingTop: '32px',
    paddingBottom: '32px',
    maxWidth: '1000px',}}>
  {props.children}
  </div>
  
  </StyleProvider>



const someCSS =  `

/* inspired by: https://css-tricks.com/responsive-data-tables/ */
.responsiveTable {
  width: 100%;
  text-align: left;

}

.responsiveTable td .tdBefore {
  display: none;
}

@media screen and (max-width: 40em) {
  /*
    Force table elements to not behave like tables anymore
    Hide table headers (but not display: none;, for accessibility)
  */

  .responsiveTable table,
  .responsiveTable thead,
  .responsiveTable tbody,
  .responsiveTable th,
  .responsiveTable td,
  .responsiveTable tr {
    display: block;
  }

  .responsiveTable thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
    border-bottom: 2px solid #333;
  }

  .responsiveTable tbody tr {
    border: 1px solid #000;
    padding: .25em;
  }

  .responsiveTable td.pivoted {
    /* Behave like a "row" */
    border: none !important;
    border-bottom: 1px solid #000;
    position: relative;
    padding-left: 50% !important;
    text-align: left !important;
  }

  .responsiveTable td .tdBefore {
    /* Now like a table header */
    position: absolute;
    display: block;

    /* Top/left values mimic padding */
    left: 1rem;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    text-align: left !important;
    font-weight: 600;
  }
}

`