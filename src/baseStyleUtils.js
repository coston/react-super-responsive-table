const baseStyles = `
.responsiveTable td .tdBefore {
  display: none;
}

@media screen and (max-width: 40em) {
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
  }

  .responsiveTable td.pivoted {
    position: relative;
    margin-left: 50%;
  }

  .responsiveTable td .tdBefore {
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
  }
}
`

export const injectBaseStyles = () => {
  const styleTag = document.createElement('style')
  styleTag.setAttribute('data-super-responsive-table', '')
  styleTag.innerHTML = baseStyles

  document.head.appendChild(styleTag)
}
