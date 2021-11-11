import { useQuery } from 'react-query'

import WeatherLayout from '../../components/layouts/Weather/WeatherLayout'
import Loader from '../../components/elements/Loader'
import WeatherError from '../../components/elements/Weather/WeatherError'
import WeatherRefetchButton from '../../components/elements/Weather/WeatherRefetchButton'

import { getWeather } from '../../services/weatherService'

import { HomePageProps } from './types'
import { IWeather } from '../../types/Weather'

import { HomeContainer } from '../../styles/pages/HomeStyles'

export default function HomePage({ position }: HomePageProps) {
  const { latitude, longitude } = position.coords

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isError: isWeatherError,
    refetch: refreshWeather,
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
    return (
      <>
        <WeatherError />
        <WeatherRefetchButton onRefetch={refreshWeather} />
      </>
    )
  }

  if (weatherData) {
    return (
      <HomeContainer>
        <WeatherLayout
          weatherData={weatherData}
          refreshWeather={refreshWeather}
        />
      </HomeContainer>
    )
  }

  return null
}
