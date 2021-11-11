import { GeolocationErrorContainer } from './styles'

export default function GeolocationErrorLayout() {
  return (
    <GeolocationErrorContainer data-testid="modal-geolocation-error">
      Please, check your device location option and reload the window
    </GeolocationErrorContainer>
  )
}
