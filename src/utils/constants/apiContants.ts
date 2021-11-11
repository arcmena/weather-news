import { WEATHER_UNIT } from './weatherConstants'

export const DEFAULT_PARAMS = {
  appid: process.env.REACT_APP_API_KEY,
  units: WEATHER_UNIT.UNIT
}
