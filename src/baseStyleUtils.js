const css = (strings, ...expressions) => {
  let str = ''
  strings.forEach((string, i) => {
    str += string + (expressions[i] || '')
  })

  return str
}

const generateBaseStyles = ({ breakpoint = '40em' }) => css`
.super-responsive-table__th_pivoted {
  display: none;
}

@media screen and (max-width: ${breakpoint}) {
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

  .super-responsive-table__th_pivoted {
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
  }
}
`

const getStyleTag = () => {
  const existingStyleTag = document.head.querySelector(
    'style[data-super-responsive-table]'
  )

  if (existingStyleTag) {
    return existingStyleTag
  }

  const newStyleTag = document.createElement('style')
  newStyleTag.setAttribute('data-super-responsive-table', '')
  document.head.appendChild(newStyleTag)

  return newStyleTag
}

export const injectBaseStyles = props => {
  const styleTag = getStyleTag()
  styleTag.innerHTML = generateBaseStyles(props)
}
