/* eslint-disable */
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../utils/global'
import { theme } from '../utils/theme'
import Container from './Container'
import Navigation from './Navigation'
import PageHeader from './PageHeader'
import Footer from './Footer'
import Rodo from './Rodo'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          <PageHeader />
          <Navigation />
          <Container>{children}</Container>
          <Footer />
          <Rodo />
          <GlobalStyle />
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
