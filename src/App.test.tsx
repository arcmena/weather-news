import { waitForElementToBeRemoved, fireEvent } from '@testing-library/react'
import { rest } from 'msw'
import { ThemeProvider } from 'styled-components'

import App from './App'
import Layout from './components/common/Layout'
import { LocationProvider } from './contexts/LocationContext'
import { server } from './setupTests'
import GlobalStyles from './styles/globals'
import { theme } from './styles/theme'

import {
  mockCurrentPositionCoords,
  mockNavigatorGeolocation,
  mockWeatherResponse,
  renderWithClient
} from './testUtils'
import { formatTemperature } from './utils/helpers/weatherHelpers'

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
    success(mockCurrentPositionCoords)
  )

const mockCurrentPositionError = () => {
  const error = new Error('Error!')

  getCurrentPositionMock.mockImplementation((_, rejected) => rejected(error))
}

describe('<App />', () => {
  it('should render without crashing', async () => {
    // setup current position on geolocation
    mockCurrentPosition()

    const { getByTestId } = renderWithClient(<Setup />)

    // wait to load mocked request
    await waitForElementToBeRemoved(getByTestId('loader'))

    const { weather } = mockWeatherResponse

    const currentWeather = weather[0]

    // expect the weather data to be displayed
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

  it('should show modal to inform of an location error', () => {
    // setup geolocation error
    mockCurrentPositionError()

    const { getByTestId } = renderWithClient(<Setup />)

    expect(getByTestId('modal-geolocation-error')).toHaveTextContent(
      'Please, check your device location option and reload the window'
    )
  })

  it('should render a position, then be able to refetch and change weather data', async () => {
    // setup current position on geolocation
    mockCurrentPosition()

    const { getByTestId } = renderWithClient(<Setup />)

    // wait to load mocked request
    await waitForElementToBeRemoved(getByTestId('loader'))

    const { main } = mockWeatherResponse

    const temperature = formatTemperature(main.temp)

    // expect the weather data to be displayed
    expect(getByTestId('weather-temperature')).toHaveTextContent(temperature)

    const newWeatherResponse = {
      weather: [
        {
          main: 'Clouds',
          icon: '04n'
        }
      ],
      main: {
        temp: 17
      },
      sys: {
        country: 'NY'
      },
      name: 'New York'
    }

    // replace server response with new weather data
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(newWeatherResponse))
      })
    )

    // click the refetch button
    fireEvent.click(getByTestId('weather-refetch'))

    // await for elements to be removed from screen
    await waitForElementToBeRemoved(getByTestId('weather-refetch'))
    await waitForElementToBeRemoved(getByTestId('loader'))

    const newTemperature = formatTemperature(newWeatherResponse.main.temp)

    // expect the new weather data to be displayed
    expect(getByTestId('weather-temperature')).toHaveTextContent(newTemperature)
  })
})
