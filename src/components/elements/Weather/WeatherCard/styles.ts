import styled, { css } from 'styled-components'

export const WeatherCardContainer = styled.div(
  () => css`
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `
)

export const WeatherCardIcon = styled.img(() => css``)

export const WeatherCardCondition = styled.h2(
  ({
    theme: {
      fonts: { sizes }
    }
  }) => css`
    font-size: ${sizes.base};
  `
)

export const WeatherCardTemperature = styled.h1(
  ({
    theme: {
      fonts: { sizes },
      spacing
    }
  }) => css`
    font-size: ${sizes['4xl']};

    margin: ${spacing[1]} 0;
  `
)

export const WeatherCardLocalization = styled.p(() => css``)
