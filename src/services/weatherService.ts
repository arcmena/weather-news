import { api } from './api'

import { DEFAULT_PARAMS } from '../utils/constants/apiContants'

import { IWeather } from '../types/Weather'

type TLatLng = { lat: number; lon: number }

export const getWeather = (latlng: TLatLng) =>
  api
    .get<IWeather>('/weather', {
      params: { ...latlng, ...DEFAULT_PARAMS }
    })
    .then(({ data }) => data)
