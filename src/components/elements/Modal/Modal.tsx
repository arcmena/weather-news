import { ReactNode } from 'react'

import { Container, ContainerRoot } from './styles'

interface ModalProps {
  children: ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <ContainerRoot>
      <Container>{children}</Container>
    </ContainerRoot>
  )
}
