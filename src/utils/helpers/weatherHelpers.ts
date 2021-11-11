import { WEATHER_ICON_SIZE, WEATHER_UNIT } from '../constants/weatherConstants'

export const formatTemperature = (temp: number) => {
  const [decimal, _fraction] = String(temp).split('.')

  return `${decimal} ${WEATHER_UNIT.SYMBOL}`
}

export const weatherIcon = (icon: string) =>
  `http://openweathermap.org/img/wn/${icon}@${WEATHER_ICON_SIZE}.png`
