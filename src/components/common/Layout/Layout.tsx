import { useGeolocation } from '../../../hooks/useGeolocation'

import { LayoutProps } from './types'

import { MainContainer } from './styles'

export default function Layout({ children }: LayoutProps) {
  const { position, notSupported, positionError } = useGeolocation()

  console.log(position?.coords)

  const hasPosition = () => !!position

  console.log(hasPosition())

  return (
    <>
      <MainContainer>{children}</MainContainer>
    </>
  )
}
