import { fireEvent } from '@testing-library/react'

import WeatherLayout from '.'
import { mockWeatherResponse, renderWithTheme } from '../../../../testUtils'

describe('<WeatherLayout />', () => {
  it('should render without crashing', () => {
    const mockRefreshWeather = jest.fn()

    const { getByTestId } = renderWithTheme(
      <WeatherLayout
        weatherData={mockWeatherResponse}
        refreshWeather={mockRefreshWeather}
      />
    )

    const { weather } = mockWeatherResponse

    const currentWeather = weather[0]

    expect(getByTestId('weather-condition')).toHaveTextContent(
      currentWeather.main
    )
  })

  it('should call refreshWeather when refresh button is pressed', () => {
    const mockRefreshWeather = jest.fn()

    const { getByTestId } = renderWithTheme(
      <WeatherLayout
        weatherData={mockWeatherResponse}
        refreshWeather={mockRefreshWeather}
      />
    )

    fireEvent.click(getByTestId('weather-refetch'))

    expect(mockRefreshWeather).toHaveBeenCalledTimes(1)
  })
})
