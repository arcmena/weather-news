import styled, { css } from 'styled-components'

export const GeolocationErrorContainer = styled.div(
  ({ theme: { colors } }) => css`
    color: ${colors.dark};
  `
)
