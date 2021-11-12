import { render } from '@testing-library/react'
import { rest } from 'msw'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const mockWeatherResponse = {
  weather: [
    {
      main: 'Clouds',
      icon: '04n'
    }
  ],
  main: {
    temp: 15.39
  },
  sys: {
    country: 'NY'
  },
  name: 'New York'
}

export const mockCurrentPositionCoords = {
  coords: {
    latitude: 51.1,
    longitude: 45.3
  }
}

export const handlers = [
  rest.get('https://api.openweathermap.org/data/2.5/*', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockWeatherResponse))
  })
]

export const mockNavigatorGeolocation = () => {
  const clearWatchMock = jest.fn()
  const getCurrentPositionMock = jest.fn()
  const watchPositionMock = jest.fn()

  const geolocation = {
    clearWatch: clearWatchMock,
    getCurrentPosition: getCurrentPositionMock,
    watchPosition: watchPositionMock
  }

  Object.defineProperty(global.navigator, 'geolocation', {
    value: geolocation
  })

  return { clearWatchMock, getCurrentPositionMock, watchPositionMock }
}

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  })

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient()
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  )
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      )
  }
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient()
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
}
