import WeatherCard from '../../../elements/Weather/WeatherCard'
import WeatherRefetchButton from '../../../elements/Weather/WeatherRefetchButton'

import { WeatherLayoutProps } from './types'

import { WeatherContainer } from './styles'

export default function WeatherLayout({
  weatherData,
  refreshWeather
}: WeatherLayoutProps) {
  return (
    <WeatherContainer>
      <WeatherCard weatherData={weatherData} />
      <WeatherRefetchButton onRefetch={refreshWeather} />
    </WeatherContainer>
  )
}
