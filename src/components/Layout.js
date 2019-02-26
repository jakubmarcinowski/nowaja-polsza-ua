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
  margin: 6rem auto 0;

  @media ${mediaQueries.tablet} {
    margin: 0 auto;
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
    const { children, currentCategory } = this.props
    const { isMobileView } = this.state

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    //@todo add social media for desktop and categories

    return (
      <ThemeProvider theme={theme}>
        <>
          {isMobileView ? (
            <MobileMenu />
          ) : (
            <PageHeader currentCategory={currentCategory} />
          )}
          <LayoutWrapper>
            <Container>{children}</Container>
            <Footer />
            <Rodo />
            <GlobalStyle />
          </LayoutWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
