import Logo from './components/elements/Logo'
import WeatherLayout from './components/layouts/Weather/WeatherLayout'

import useLocation from './hooks/useLocation'

import { HomeContainer } from './styles/pages/HomeStyles'

function App() {
  const { position } = useLocation()

  return (
    <HomeContainer>
      <Logo />
      {position && <WeatherLayout position={position} />}
    </HomeContainer>
  )
}

export default App
