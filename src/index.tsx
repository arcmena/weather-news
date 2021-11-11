import { StrictMode } from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import App from './App'
import Layout from './components/common/Layout'

import { LocationProvider } from './contexts/LocationContext'

import { theme } from './styles/theme'
import GlobalStyles from './styles/globals'

const queryClient = new QueryClient()

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />

        <LocationProvider>
          <Layout>
            <App />
          </Layout>
        </LocationProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
