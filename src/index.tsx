import { StrictMode } from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import Layout from './components/common/Layout'

import { LocationProvider } from './contexts/LocationContext'

import { theme } from './styles/theme'
import GlobalStyles from './styles/globals'

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <LocationProvider>
        <Layout>
          <App />
        </Layout>
      </LocationProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
