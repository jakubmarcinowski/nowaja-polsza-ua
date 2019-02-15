/* eslint-disable */
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Container from './Container'
import Navigation from './Navigation'
import PageHeader from './PageHeader'
import Footer from './Footer'
import Rodo from './Rodo'

const theme = {
  dark: '#111d22',
  darkGreyBlue: '#263e48',
  primary: '#253e48',
  secondary: '#820204',
  rouge: '#a01c32',
  terraCotta: '#c8553d',
  dullOrange: '#d7973c',
  greyTeal: '#588b8b',
  plum: '#711423',
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Avenir";
    font-weight: 400;
    font-style: normal;
    src: url("/avenir-400.woff2") format("woff2");
    font-display: swap;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
  }
  a {
    text-decoration: none;
    color: ${theme.dark};
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
