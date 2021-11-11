import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

import Refetch from '../../Icons/Refetch'

import { WeatherRefetchButtonProps } from './types'

const Container = styled.button(
  ({ theme: { spacing, colors } }) => css`
    display: flex;
    cursor: pointer;
    border-radius: 4px;

    padding: ${spacing[2]};
    margin-top: ${spacing[6]};

    background-color: ${transparentize(0.8, colors.dark)};
  `
)

export default function WeatherRefetchButton({
  onRefetch
}: WeatherRefetchButtonProps) {
  return (
    <Container onClick={onRefetch} data-testid="weather-refetch">
      <Refetch />
    </Container>
  )
}
