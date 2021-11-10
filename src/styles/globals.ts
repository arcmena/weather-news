import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle(
  ({ theme: { colors } }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'PT Sans', sans-serif;
      color: ${colors.light};
    }
  `
)
