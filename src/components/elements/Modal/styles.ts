import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

export const ContainerRoot = styled.div(
  () => css`
    position: fixed;
    background-color: ${transparentize(0.6, '#000000')};
    backdrop-filter: blur(0.8px);

    display: flex;
    align-items: center;
    justify-content: center;

    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    z-index: 50;
  `
)

export const Container = styled.div(
  ({ theme: { colors, spacing } }) => css`
    background-color: ${colors.light};
    padding: ${spacing[12]};
    position: relative;
  `
)
