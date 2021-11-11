import { waitForElementToBeRemoved } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import App from './App'
import Layout from './components/common/Layout'
import { LocationProvider } from './contexts/LocationContext'
import GlobalStyles from './styles/globals'
import { theme } from './styles/theme'

import {
  mockCurrentPosition,
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

describe('<App />', () => {
  beforeEach(() => mockCurrentPosition())

  it('should render without crashing', async () => {
    const { getByTestId } = renderWithClient(<Setup />)

    await waitForElementToBeRemoved(getByTestId('loader'))

    const { weather } = mockWeatherResponse

    const currentWeather = weather[0]

    expect(getByTestId('weather-condition')).toHaveTextContent(
      currentWeather.main
    )
  })
})
