import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { mediaQueries } from 'utils/mediaQueries'
import Header from 'components/Header'
import Button from 'components/Button'
import Paragraph from 'components/Paragraph'
import ImgWrapper from 'components/ImgWrapper'
import { trans } from 'utils/translate'

const AuthorImg = styled(ImgWrapper)`
  position: absolute !important;

  min-width: 13rem;
  min-height: 13rem;
  max-width: 13rem;
  max-height: 13rem;

  @media ${mediaQueries.tablet} {
    top: -1rem;
    left: -9rem;
  }

  @media print {
    page-break-before: auto;
    page-break-after: auto;
    page-break-inside: avoid;
  }
`

const Element = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: 100%;
  margin: 2rem auto;

  ${({ few }) => few && `margin: 2rem;`};

  @media ${mediaQueries.phoneLandscape} {
    max-width: 30rem;
    min-width: 30rem;
  }

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    margin: 5rem auto;
    max-width: 65%;

    ${({ few }) =>
      few &&
      `
        flex-direction: column;
        flex-wrap: wrap;
        margin: 5rem;
      `};
  }

  @media print {
    page-break-before: auto;
    page-break-after: auto;
    page-break-inside: avoid;
  }
`

const ReadMoreBtn = styled(Button)`
  margin: 2.5rem 0 auto;

  @media ${mediaQueries.tablet} {
    position: absolute;
    bottom: 0;
    right: 3rem;
    transform: translate(0, 50%);
  }
`

const Info = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 3.5rem;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.listItemBackground};
  margin-top: 10rem;
  margin-left: 3rem;

  @media ${mediaQueries.tablet} {
    display: block;
    padding: 0 3rem 5rem 7rem;
    margin-top: 0;

    ${({ few }) =>
      few ? `padding: 0 3rem 6rem 7rem;` : 'flex-direction: row;'};
  }
`

const Desc = styled(Paragraph)`
  display: none;

  @media ${mediaQueries.tablet} {
    display: block;
    margin-top: 1rem;
  }
`

const StyledName = styled(Header)`
  margin-top: 3em;
  font-size: 2rem;

  @media ${mediaQueries.tablet} {
    margin: 1.7em 0;
  }
`

const AuthorShort = ({ few, author: { name, shortBio, image, slug } }) => {
  image.title = `${name} image`
  return (
    <Element few={few}>
      {image && <AuthorImg img={image} />}
      <Info few={few}>
        {name && (
          <StyledName color="Red" weight="Bold">
            {name}
          </StyledName>
        )}
        {shortBio && (
          <Desc size={'Big'} weight="Light" lineHeight="Medium" color="Black">
            <span
              dangerouslySetInnerHTML={{
                __html: shortBio.childMarkdownRemark.excerpt,
              }}
            />
          </Desc>
        )}
        {slug && (
          <Link to={`/author/${slug}`}>
            <ReadMoreBtn>{trans('ALL_AUTHOR_TEXTS')}</ReadMoreBtn>
          </Link>
        )}
      </Info>
    </Element>
  )
}

AuthorShort.propTypes = {
  author: PropTypes.any,
  few: PropTypes.bool,
}

export default AuthorShort
