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
import MobileMenu from './MobileMenu'
import { breakpoints } from '../utils/mediaQueries'

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
`

class Layout extends React.Component {
  state = {
    isMobileView: false,
  }

  componentDidMount() {
    if (window.innerWidth < breakpoints.phoneLandscape) {
      this.setState({ isMobileView: true })
    }
  }

  render() {
    const { children } = this.props
    const { isMobileView } = this.state

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          {isMobileView ? <MobileMenu /> : <Navigation />}
          <Wrapper>
            <PageHeader />
            <Line />
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
