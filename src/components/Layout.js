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

const MobileMenuContainer = styled.div`
  @media ${mediaQueries.desktop} {
    display: none;
  }
`

const PageHeaderContainer = styled.div`
  display: none;

  @media ${mediaQueries.desktop} {
    display: block;
  }
`

const Layout = ({ children, currentCategory }) => {
  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <MobileMenuContainer>
          <MobileMenu currentCategory={currentCategory} />
        </MobileMenuContainer>
        <PageHeaderContainer>
          <PageHeader currentCategory={currentCategory} />
        </PageHeaderContainer>
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

export default Layout
