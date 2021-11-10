import styled, { css } from 'styled-components'

export const MainContainer = styled.main(
  ({ theme: { colors } }) => css`
    width: 100vw;
    height: 100vh;

    background-color: ${colors.dark};

    display: flex;
    justify-content: center;
    align-items: center;
  `
)
