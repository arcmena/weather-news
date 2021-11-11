import { ReactNode } from 'react'

import { TPosition } from '../../types/Position'

export interface ILocationContextProps {
  position?: TPosition
  positionError: GeolocationPositionError | null
  notSupported: boolean
  hasPosition: () => boolean
  hasPositionError: () => boolean
}

export interface ILocationProviderProps {
  children: ReactNode
}

export type TPositionError = GeolocationPositionError | null
