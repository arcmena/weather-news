import { useQuery } from 'react-query'

import Loader from '../../../elements/Loader'
import WeatherCard from '../../../elements/Weather/WeatherCard'
import WeatherRefetchButton from '../../../elements/Weather/WeatherRefetchButton'

import { getWeather } from '../../../../services/weatherService'

import { WeatherLayoutProps } from './types'
import { IWeather } from '../../../../types/Weather'

import { WeatherContainer } from './styles'

export default function WeatherLayout({ position }: WeatherLayoutProps) {
  const { latitude, longitude } = position.coords

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isError: isWeatherError,
    refetch: refeshWeather,
    isRefetching: isWeatherRefreshing
  } = useQuery<IWeather>(
    'weather',
    () => getWeather({ lat: latitude, lon: longitude }),
    { refetchOnWindowFocus: false }
  )

  if (isWeatherLoading || isWeatherRefreshing) {
    return <Loader />
  }

  if (isWeatherError) {
    return <div>error</div>
  }

  if (weatherData) {
    return (
      <WeatherContainer>
        <WeatherCard weatherData={weatherData} />
        <WeatherRefetchButton onRefetch={refeshWeather} />
      </WeatherContainer>
    )
  }

  return null
}
