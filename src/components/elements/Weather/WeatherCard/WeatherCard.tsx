import {
  formatTemperature,
  weatherIcon
} from '../../../../utils/helpers/weatherHelpers'

import { WeatherCardProps } from './types'

import {
  WeatherCardContainer,
  WeatherCardIcon,
  WeatherCardCondition,
  WeatherCardTemperature,
  WeatherCardLocalization
} from './styles'

export default function WeatherCard({ weatherData }: WeatherCardProps) {
  const { sys, weather, main, name } = weatherData

  const temperature = formatTemperature(main.temp)

  const weatherCondition = weather[0]

  const localization = `${name} - ${sys.country}`

  const weatherIconSource = weatherIcon(weatherCondition.icon)

  return (
    <WeatherCardContainer>
      <WeatherCardIcon src={weatherIconSource} alt={weatherCondition.main} />

      <WeatherCardCondition>{weatherCondition.main}</WeatherCardCondition>

      <WeatherCardTemperature>{temperature}</WeatherCardTemperature>

      <WeatherCardLocalization>{localization}</WeatherCardLocalization>
    </WeatherCardContainer>
  )
}
