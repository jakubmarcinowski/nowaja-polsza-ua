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
import { mediaQueries } from '../utils/mediaQueries'
import { isSiteBlocked } from '../utils/blockSiteBeforeLive'

export const LayoutWrapper = styled.div`
  margin: 8.7rem auto 0;

  @media ${mediaQueries.desktop} {
    margin: 5rem auto 0;
  }
  ${({ isBlocked }) =>
    isBlocked &&
    `
    &:after {
      content: '';
      position: fixed;
      top: 0;
      z-index: 9999999999;
      height: 100vh;
      width: 100vw;
      background: white; 
      opacity: 1;
    }`}
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
const BodyContainer = styled.div`
  min-height: 21vh;

  @media ${mediaQueries.phoneLandscape} {
    min-height: 0;
  }

  @media ${mediaQueries.tablet} {
    min-height: 60vh;
  }

  @media ${mediaQueries.desktop} {
    min-height: 50vh;
  }
`

class Layout extends React.Component {
  state = {
    isBlocked: true,
  }

  componentDidMount() {
    console.log('did mount')
    setTimeout(() => {
      if (!isSiteBlocked()) {
        this.setState({ isBlocked: false })
      }
    }, 1000)
  }

  render() {
    const { children, currentCategory } = this.props
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
          <LayoutWrapper isBlocked={this.state.isBlocked}>
            <BodyContainer>
              <Container>{children}</Container>
            </BodyContainer>
            <Footer />
            <Rodo />
            <GlobalStyle />
          </LayoutWrapper>
        </>
      </ThemeProvider>
    )
  }
}

// const Layout = ({ children, currentCategory }) => {
//   let rootPath = `/`
//   if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
//     rootPath = __PATH_PREFIX__ + `/`
//   }

//   console.log(isSiteBlocked())

//   return (
//     <ThemeProvider theme={theme}>
//       <>
//         <MobileMenuContainer>
//           <MobileMenu currentCategory={currentCategory} />
//         </MobileMenuContainer>
//         <PageHeaderContainer>
//           <PageHeader currentCategory={currentCategory} />
//         </PageHeaderContainer>
//         <LayoutWrapper>
//           <BodyContainer>
//             <Container>{children}</Container>
//           </BodyContainer>
//           <Footer />
//           <Rodo />
//           <GlobalStyle />
//         </LayoutWrapper>
//       </>
//     </ThemeProvider>
//   )
// }

export default Layout
