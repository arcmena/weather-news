import { IWeather } from '../../../../types/Weather'

export interface WeatherLayoutProps {
  weatherData: IWeather
  refreshWeather: () => void
}
