/* eslint-disable */
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Container from './Container'
import Navigation from './Navigation'
import PageHeader from './PageHeader'
import Footer from './Footer'
import Rodo from './Rodo'
import Line from './Line'

const theme = {
  colors: {
    black: '#111D22',
    primary: '#253e48',
    secondary: '#820204',
  },
}

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  @font-face {
    font-family: "Avenir";
    font-weight: 400;
    font-style: normal;
    src: url("/avenir-400.woff2") format("woff2");
    font-display: swap;
  }
  body {
    font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
  }
`

// Example of usage
// const StyledLayout = styled.div`
//   background: white;
//   color: ${props => props.theme.black};
// `

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
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
        <Wrapper>
          <PageHeader />
          <Line />
          <Navigation />
          <Container>{children}</Container>
          <Line />
          <Footer />
          <Rodo />
          <GlobalStyle />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default Layout
