import styled, { css } from 'styled-components'

export const WeatherContainer = styled.div(
  ({ theme: { spacing } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `
)
