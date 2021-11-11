import { useQuery } from 'react-query'

import { getWeather } from '../../../../services/weatherService'

import { WeatherLayoutProps } from './types'
import { IWeather } from '../../../../types/Weather'

import { WeatherContainer } from './styles'

export default function WeatherLayout({ position }: WeatherLayoutProps) {
  const { latitude, longitude } = position.coords

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isError: isWeatherError
  } = useQuery<IWeather>('weather', () =>
    getWeather({ lat: latitude, lon: longitude })
  )

  if (isWeatherLoading) {
    return <div>loading...</div>
  }

  if (isWeatherError) {
    return <div>error</div>
  }

  console.log(weatherData)

  return <WeatherContainer>asd</WeatherContainer>
}
