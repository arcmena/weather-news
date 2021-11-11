import styled, { css } from 'styled-components'

export const HomeContainer = styled.section(
  ({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
      margin-bottom: ${spacing[4]};
    }
  `
)
