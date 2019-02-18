/* eslint-disable */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import { GlobalStyle } from '../utils/global'
import { theme } from '../utils/theme'
import Container from './Container'
import Navigation from './Navigation'
import PageHeader from './PageHeader'
import Footer from './Footer'
import Rodo from './Rodo'
import Line from './Line'
import { mediaQueries } from '../utils/mediaQueries'

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  @media ${mediaQueries.tablet} {
    padding: 0 40px;
  }

  @media ${mediaQueries.large} {
    padding: 0 80px;
  }
`

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
          <Wrapper>
            <Line />
            <Navigation />
            <Container>{children}</Container>
            <Line />
            <Footer />
            <Rodo />
            <GlobalStyle />
          </Wrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
