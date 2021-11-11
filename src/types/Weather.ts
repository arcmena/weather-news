export type TWeather = {
  id: number
  main: string
  description: string
  icon: string
}

export interface IWeather {
  weather: Array<TWeather>
  main: {
    temp: number
  }
  sys: {
    country: string
  }
  name: string
}
