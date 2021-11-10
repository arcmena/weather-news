import Logo from './components/elements/Logo'
import WeatherLayout from './components/layouts/Weather/WeatherLayout'

import useLocation from './hooks/useLocation'

import { HomeContainer } from './styles/pages/HomeStyles'

function App() {
  const { position } = useLocation()

  const hasPosition = () => !!position

  console.log(position)

  return (
    <HomeContainer>
      <Logo />
      {hasPosition() && <WeatherLayout />}
    </HomeContainer>
  )
}

export default App
