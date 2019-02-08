/* eslint-disable */
import React from 'react'
import Container from './Container'
import Navigation from './Navigation'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

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

  .wrapper {
    width: calc(100% - 10vmin);
    margin: 0 auto;
    padding: 5vmin 0;
  }

  .article-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 5vmin;
  }

  .section-headline {
    padding: 0 0 0.4em 0;
    margin: 0 0 5vmin 0;
    border-bottom: 1px solid #ddd;
  }

  .list-inline {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .list-inline li {
    display: inline-block;
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
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          <Container>
            <Navigation />
            {children}
          </Container>
          <GlobalStyle />
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
