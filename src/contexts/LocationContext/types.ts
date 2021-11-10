import { ReactNode } from 'react'

export interface ILocationContextProps {
  position: GeolocationPosition | null
  positionError: GeolocationPositionError | null
  notSupported: boolean
  hasPosition: () => boolean
  hasPositionError: () => boolean
}

export interface ILocationProviderProps {
  children: ReactNode
}

export type TPosition = GeolocationPosition | null

export type TPositionError = GeolocationPositionError | null
