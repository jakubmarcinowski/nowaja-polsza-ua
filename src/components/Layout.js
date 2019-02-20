/* eslint-disable */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import { GlobalStyle } from '../utils/global'
import { theme } from '../utils/theme'
import Container from './Container'
import PageHeader from './PageHeader'
import Footer from './Footer'
import Rodo from './Rodo'
import MobileMenu from './MobileMenu'
import { breakpoints } from '../utils/mediaQueries'
import { mediaQueries } from '../utils/mediaQueries'

export const LayoutWrapper = styled.div`
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
  state = {
    isMobileView: false,
  }

  componentDidMount() {
    if (window.innerWidth < breakpoints.tablet) {
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

    //@todo add social media for desktop and categories

    return (
      <ThemeProvider theme={theme}>
        <>
          {isMobileView ? <MobileMenu /> : <PageHeader />}
          <LayoutWrapper>
            <Line />
            <Container>{children}</Container>
            <Footer />
            {/* Todo later when will be RWD for Rodo */}
            {/* <Rodo /> */}
            <GlobalStyle />
          </LayoutWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
