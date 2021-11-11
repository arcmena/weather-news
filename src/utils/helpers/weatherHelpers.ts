import { WEATHER_ICON_SIZE } from '../constants/weatherConstants'

export const formatTemperature = (temp: number) => {
  const [decimal, _fraction] = String(temp).split('.')

  return `${decimal} °C`
}

export const weatherIcon = (icon: string) =>
  `http://openweathermap.org/img/wn/${icon}@${WEATHER_ICON_SIZE}.png`
