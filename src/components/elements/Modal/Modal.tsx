import { ReactNode } from 'react'

import { Container, ContainerRoot } from './styles'

interface ModalProps {
  children: ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <ContainerRoot data-testid="modal">
      <Container>{children}</Container>
    </ContainerRoot>
  )
}
