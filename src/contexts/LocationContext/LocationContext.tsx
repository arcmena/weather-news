import { createContext, useEffect, useState } from 'react'

import { TPosition } from '../../types/Position'
import {
  ILocationContextProps,
  ILocationProviderProps,
  TPositionError
} from './types'

export const LocationContext = createContext({} as ILocationContextProps)

export const LocationProvider = ({ children }: ILocationProviderProps) => {
  const [position, setPosition] = useState<TPosition>()
  const [positionError, setPositionError] = useState<TPositionError>(null)
  const [notSupported, setNotSupported] = useState<boolean>(false)

  const onSuccess = (newPos: GeolocationPosition) => {
    setPosition(newPos)
  }

  const onError = (error: GeolocationPositionError) => {
    setPositionError(error)
  }

  useEffect(() => {
    const geolocator = navigator.geolocation

    if (!geolocator) {
      setNotSupported(true)
      return
    }

    geolocator.getCurrentPosition(onSuccess, onError)
  }, [])

  const hasPosition = () => !!position
  const hasPositionError = () => notSupported || !!positionError

  const providerValue = {
    position,
    positionError,
    notSupported,
    hasPosition,
    hasPositionError
  }

  return (
    <LocationContext.Provider value={providerValue}>
      {children}
    </LocationContext.Provider>
  )
}
