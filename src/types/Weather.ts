export type TWeather = {
  main: string
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
