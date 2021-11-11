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
      <WeatherCardIcon
        data-testid="weather-icon"
        src={weatherIconSource}
        alt={weatherCondition.main}
      />

      <WeatherCardCondition data-testid="weather-condition">
        {weatherCondition.main}
      </WeatherCardCondition>

      <WeatherCardTemperature data-testid="weather-temperature">
        {temperature}
      </WeatherCardTemperature>

      <WeatherCardLocalization data-testid="weather-localization">
        {localization}
      </WeatherCardLocalization>
    </WeatherCardContainer>
  )
}
