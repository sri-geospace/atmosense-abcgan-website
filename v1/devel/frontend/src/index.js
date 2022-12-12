import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider, Global } from '@mantine/core'
import { GlobalStyles } from './styles'

import { App } from 'app'

document.title = process.env.REACT_APP_TITLE

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.REACT_APP_ROOT_URL}>
      <Global styles={GlobalStyles} />
      <MantineProvider withNormalizeCSS withGlobalStyles >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
)

