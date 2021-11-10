import { createContext, ReactNode, useEffect, useState } from 'react'

export const LocationContext = createContext(
  {} as {
    position: GeolocationPosition | null
    positionError: GeolocationPositionError | null
    notSupported: boolean
    hasPosition: () => boolean
    hasPositionError: () => boolean
  }
)

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null)
  const [positionError, setPositionError] =
    useState<GeolocationPositionError | null>(null)
  const [notSupported, setNotSupported] = useState(false)

  const onSuccess = (newPos: GeolocationPosition) => {
    setPosition(newPos)
  }

  const onError = (error: GeolocationPositionError) => {
    setPositionError(error)
  }

  useEffect(() => {
    const geo = navigator.geolocation

    if (!geo) {
      setNotSupported(true)
      return
    }

    geo.getCurrentPosition(onSuccess, onError)
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
