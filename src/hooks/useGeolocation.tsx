import { useState, useEffect } from 'react'

export const useGeolocation = () => {
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

  return { position, positionError, notSupported }
}
