import { waitForElementToBeRemoved } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import HomePage from '.'
import { theme } from '../../styles/theme'

import {
  mockCurrentPositionCoords,
  mockWeatherResponse,
  renderWithClient
} from '../../testUtils'

const Setup = () => (
  <ThemeProvider theme={theme}>
    <HomePage position={mockCoords} />
  </ThemeProvider>
)

const mockCoords: GeolocationPosition = {
  coords: {
    ...mockCurrentPositionCoords.coords,
    accuracy: 1,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  },
  timestamp: 1
}

describe('<HomePage />', () => {
  it('should render without crashing', async () => {
    const { getByTestId } = renderWithClient(<Setup />)

    await waitForElementToBeRemoved(getByTestId('loader'))

    const { weather } = mockWeatherResponse

    const currentWeather = weather[0]

    // expect the weather data to be displayed
    expect(getByTestId('weather-condition')).toHaveTextContent(
      currentWeather.main
    )
  })
})
