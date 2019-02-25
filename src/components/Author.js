import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ImgWrapper from './ImgWrapper'
import Header from './Header'
import Paragraph from './Paragraph'
import Button from './Button'
import { mediaQueries } from '../utils/mediaQueries'

const AuthorImg = styled(ImgWrapper)`
  @media ${mediaQueries.tablet} {
    position: absolute;
    top: -2rem;
    left: -2rem;
    min-width: 22rem;
    min-height: 22rem;
    max-width: 22rem;
    max-height: 22rem;
  }
`

const Element = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: calc(100%);
  margin: 2rem auto;
  background: ${({ theme }) => theme.colors.authorBackground};

  ${({ few }) => few && `margin: 2rem;`};

  @media ${mediaQueries.phoneLandscape} {
    max-width: 30rem;
    min-width: 30rem;
  }

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    margin: 5rem auto;
    max-width: 70%;

    ${({ few }) =>
      few &&
      `
          flex-direction: column;
          flex-wrap: wrap;
          margin: 5rem;
          max-width: 3.9rem; 
        `};
  }
`

const ReadMoreBtn = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 50%);

  @media ${mediaQueries.tablet} {
    right: 2rem;
    transform: translate(0, 50%);
  }
`

const Info = styled.div`
  padding: 3rem 3rem 5rem 3rem;

  @media ${mediaQueries.tablet} {
    padding: 3rem 3rem 3rem 1rem;

    ${({ few }) =>
      few
        ? `
        padding: 3rem 3rem 5rem 3rem;
        `
        : 'flex-direction: row;'};
  }
`

const Desc = styled(Paragraph)`
  margin-top: 1rem;
`

const Author = ({
  author: { name, shortBio, image, slug },
  authorPage,
  few,
}) => (
  <Element few={few}>
    {image && <AuthorImg img={image} />}
    <Info few={few}>
      {name && (
        <Header size="Bigger" color="Black">
          {name}
        </Header>
      )}

      {shortBio && (
        <Desc size="Bigger" weight="Light" lineHeight="Medium" color="Black">
          <span
            dangerouslySetInnerHTML={{
              __html: shortBio.childMarkdownRemark.excerpt,
            }}
          />
        </Desc>
      )}
    </Info>
    {!authorPage && slug && (
      <Link to={`/author/${slug}`}>
        <ReadMoreBtn>ПРОЧИТАЙТЕ БОЛЬШЕ</ReadMoreBtn>
      </Link>
    )}
  </Element>
)

Author.propTypes = {
  author: PropTypes.any,
  authorPage: PropTypes.bool,
  few: PropTypes.any,
}

export default Author
