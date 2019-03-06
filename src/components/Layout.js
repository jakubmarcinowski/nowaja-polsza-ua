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
  margin: 7.5rem auto 0;

  @media ${mediaQueries.desktop} {
    margin: 2.5rem auto 0;
  }
`

class Layout extends React.Component {
  state = {
    isNotDesktopView: false,
  }

  componentDidMount() {
    if (window.innerWidth < breakpoints.desktop) {
      this.setState({ isNotDesktopView: true })
    }
  }

  render() {
    const { children, currentCategory } = this.props
    const { isNotDesktopView } = this.state

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          {isNotDesktopView ? (
            <MobileMenu currentCategory={currentCategory} />
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
