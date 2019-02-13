/* eslint-disable */
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Container from './Container'
import Navigation from './Navigation'
import PageHeader from './PageHeader'
import Footer from './Footer'
import Modal from './Modal'
import Rodo from './Rodo'

const theme = {
  black: '#111D22',
  primary: '#253e48',
  secondary: '#820204',
  highlight1: '#ca5438',
  highlight2: '#dba144',
  highlight3: '#bd632e',
  highlight4: '#588b8b',
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
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`

// Example of usage
const StyledLayout = styled.div`
  background: white;
  color: ${props => props.theme.black};
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
