import Logo from './components/elements/Logo'

import HomePage from './pages/HomePage'

import useLocation from './hooks/useLocation'

function App() {
  const { position } = useLocation()

  return (
    <>
      <Logo />
      {position && <HomePage position={position} />}
    </>
  )
}

export default App
