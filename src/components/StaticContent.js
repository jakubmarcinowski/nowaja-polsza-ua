import React from 'react'
import styled from 'styled-components'
import { childrenType } from '../types/children'

import { mediaQueries } from '../utils/mediaQueries'

const StyledContent = styled.div`
  line-height: 1.6;
  padding-top: 3rem;

  @media ${mediaQueries.tablet} {
    padding-top: 6rem;
  }

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
      margin-bottom: 3.7em;
    }
    font-size: 1.6rem;
    font-weight: 300;

    @media ${mediaQueries.tablet} {
      font-size: 1.8rem;
    }

    @media ${mediaQueries.desktop} {
      font-size: 2rem;
    }

    img {
      display: block;
      max-width: 100%;

      @media ${mediaQueries.desktop} {
        max-width: 870px;
        margin-left: -100px;
      }

      @media ${mediaQueries.large} {
        max-width: ${({ theme }) =>
          `calc(${theme.grid.width.small} - ${theme.grid.paddings.large} *2)`};
        margin-left: ${({ theme }) => `calc(-${theme.grid.paddings.large} *2)`};
      }
    }
    strong {
      font-weight: 700;
    }
    em {
      font-style: italic;
    }
    a {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  ol {
    list-style: decimal;
    margin-bottom: 3rem;

    li {
      margin-bottom: 1rem;
    }
  }
`

const StaticContent = ({ children }) => (
  <StyledContent>{children}</StyledContent>
)

StaticContent.propTypes = {
  children: childrenType,
}

export default StaticContent
