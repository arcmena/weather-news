import styled from 'styled-components'

const Container = styled.h1(() => ``)

export default function Logo() {
  return <Container className="logo">Weather News</Container>
}
