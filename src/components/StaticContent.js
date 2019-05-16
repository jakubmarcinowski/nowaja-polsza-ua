import React from 'react'
import styled from 'styled-components'
import { childrenType } from '../types/children'

import { mediaQueries } from '../utils/mediaQueries'

const StyledContent = styled.div`
  overflow: hidden;
  line-height: 1.7;

  h1,
  h2,
  h3,
  p,
  ul,
  ol {
    @media ${mediaQueries.desktop} {
      max-width: 670px;
      margin: 0 auto;
    }
  }

  h1,
  h2,
  h3 {
    margin-bottom: 1.2em;
    font-weight: 700;
  }

  h1 {
    line-height: 1.3;
    font-size: 2rem;

    @media ${mediaQueries.tablet} {
      font-size: 2.3rem;
    }

    @media ${mediaQueries.desktop} {
      font-size: 2.6rem;
    }
  }

  h2 {
    line-height: 1.8;

    @media ${mediaQueries.tablet} {
      font-size: 2.1rem;
    }

    @media ${mediaQueries.desktop} {
      font-size: 2.4rem;
    }
  }

  h3 {
    line-height: 1.1;
    font-size: 1.6rem;

    @media ${mediaQueries.tablet} {
      font-size: 1.9rem;
    }

    @media ${mediaQueries.desktop} {
      font-size: 2.2rem;
    }
  }

  p {
    &:not(:last-child) {
      margin-bottom: 2.5em;
    }
    font-size: 1.4rem;
    font-weight: 300;

    @media ${mediaQueries.tablet} {
      font-size: 1.6rem;
    }

    @media ${mediaQueries.desktop} {
      font-size: 1.8rem;
    }

    img {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      max-width: 100%;

      @media ${mediaQueries.desktop} {
        max-width: 870px;
      }

      @media ${mediaQueries.large} {
        max-width: ${({ theme }) =>
          `calc(${theme.grid.width.small} - ${theme.grid.paddings.large} *2)`};
      }
    }

    strong {
      font-weight: 700;
    }

    .tag {
      display: block;
      margin-top: 1rem;
      text-align: center;
      opacity: 0.7;
      font-size: 1.2rem;

      @media ${mediaQueries.desktop} {
        font-size: 1.4rem;
      }
    }

    em {
      font-style: italic;
    }

    a {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ul {
    list-style: circle inside;
    margin-bottom: 3rem;
  }

  ol {
    list-style: decimal inside none;
    margin-bottom: 3rem;
  }

  li {
    margin-bottom: 1rem;
  }

  iframe {
    &:not(:last-child) {
      margin-bottom: 2.5em;
    }
  }

  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    &:not(:last-child) {
      margin-bottom: 2.5em;
    }
  }
  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

class StaticContent extends React.Component {
  componentDidMount() {
    const iframes = document.querySelectorAll('iframe')
    if (iframes) {
      iframes.forEach(iframe => {
        if (iframe.src.indexOf('soundcloud.com') === -1) {
          const iframeWrapper = document.createElement('div')
          iframeWrapper.className = 'videoWrapper'
          iframe.parentNode.insertBefore(iframeWrapper, iframe)
          iframeWrapper.appendChild(iframe)
        }
      })
    }
  }

  render() {
    const { children } = this.props

    return <StyledContent>{children}</StyledContent>
  }
}

StaticContent.propTypes = {
  children: childrenType,
}

export default StaticContent
