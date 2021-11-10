import Modal from '../../elements/Modal'
import AllowGeolocationLayout from '../../layouts/Modals/AllowGeolocationLayout/AllowGeolocationLayout'
import GeolocationErrorLayout from '../../layouts/Modals/GeolocationErrorLayout/GeolocationErrorLayout'

import { useGeolocation } from '../../../hooks/useGeolocation'

import { LayoutProps } from './types'

import { MainContainer } from './styles'

export default function Layout({ children }: LayoutProps) {
  const { position, notSupported, positionError } = useGeolocation()

  const hasPosition = () => !!position
  const hasPositionError = () => notSupported || !!positionError
  const shouldDisplayModal = () => !hasPosition() || hasPositionError()

  return (
    <>
      <MainContainer>{children}</MainContainer>

      {shouldDisplayModal() && (
        <Modal>
          {hasPositionError() ? (
            <GeolocationErrorLayout />
          ) : (
            <AllowGeolocationLayout />
          )}
        </Modal>
      )}
    </>
  )
}
