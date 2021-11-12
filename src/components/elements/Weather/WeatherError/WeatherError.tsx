import { WeatherErrorContainer } from './styles'

export default function WeatherError() {
  return (
    <WeatherErrorContainer data-testid="weather-request-error">
      There was an error, check your network connection and retry.
    </WeatherErrorContainer>
  )
}
