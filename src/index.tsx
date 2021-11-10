import { StrictMode } from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import Layout from './components/common/Layout'

import { theme } from './styles/theme'
import GlobalStyles from './styles/globals'

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
