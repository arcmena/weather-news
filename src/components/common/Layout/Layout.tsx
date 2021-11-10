import Modal from '../../elements/Modal'
import AllowGeolocationLayout from '../../layouts/Modals/AllowGeolocationLayout/AllowGeolocationLayout'
import GeolocationErrorLayout from '../../layouts/Modals/GeolocationErrorLayout/GeolocationErrorLayout'

import useLocation from '../../../hooks/useLocation'

import { LayoutProps } from './types'

import { MainContainer } from './styles'

export default function Layout({ children }: LayoutProps) {
  const { hasPosition, hasPositionError } = useLocation()

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
