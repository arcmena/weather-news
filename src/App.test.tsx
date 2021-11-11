import { waitForElementToBeRemoved } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import App from './App'
import Layout from './components/common/Layout'
import { LocationProvider } from './contexts/LocationContext'
import GlobalStyles from './styles/globals'
import { theme } from './styles/theme'

import {
  mockNavigatorGeolocation,
  mockWeatherResponse,
  renderWithClient
} from './testUtils'

const Setup = () => (
  <ThemeProvider theme={theme}>
    <LocationProvider>
      <GlobalStyles />

      <Layout>
        <App />
      </Layout>
    </LocationProvider>
  </ThemeProvider>
)

const { getCurrentPositionMock } = mockNavigatorGeolocation()

const mockCurrentPosition = () =>
  getCurrentPositionMock.mockImplementation((success, _) =>
    success({
      coords: {
        latitude: 51.1,
        longitude: 45.3
      }
    })
  )

const mockCurrentPositionError = () => {
  const error = new Error('Error!')

  getCurrentPositionMock.mockImplementation((_, rejected) => rejected(error))
}

describe('<App />', () => {
  it('should render without crashing', async () => {
    mockCurrentPosition()

    const { getByTestId } = renderWithClient(<Setup />)

    await waitForElementToBeRemoved(getByTestId('loader'))

    const { weather } = mockWeatherResponse

    const currentWeather = weather[0]

    expect(getByTestId('weather-condition')).toHaveTextContent(
      currentWeather.main
    )
  })

  it('should show modal to allow access to browser location', () => {
    const { getByTestId } = renderWithClient(<Setup />)

    expect(getByTestId('modal-geolocation-error')).toHaveTextContent(
      'Please allow us to use your location'
    )
  })

  it('should show modal to inform of an location error', async () => {
    mockCurrentPositionError()

    const { getByTestId } = renderWithClient(<Setup />)

    expect(getByTestId('modal-geolocation-error')).toHaveTextContent(
      'Please, check your device location option and reload the window'
    )
  })
})
