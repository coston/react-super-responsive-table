const baseStyles = `
.super-responsive-table__th_pseudo {
  display: none;
}

@media screen and (max-width: 40em) {
  .super-responsive-table__table,
  .super-responsive-table__thead,
  .super-responsive-table__tbody,
  .super-responsive-table__th,
  .super-responsive-table__td,
  .super-responsive-table__tr {
    display: block;
  }

  .super-responsive-table__thead {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  .super-responsive-table__td_pivoted {
    position: relative;
    margin-left: 50%;
  }

  .super-responsive-table__th_pseudo {
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
