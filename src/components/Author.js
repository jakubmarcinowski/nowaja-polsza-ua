import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ImgWrapper from './ImgWrapper'
import Header from './Header'
import Paragraph from './Paragraph'
import Button from './Button'
import { mediaQueries } from '../utils/mediaQueries'
import SocialMediaList from './SocialMediaList'

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
  background: ${({ theme }) => theme.colors.authorBackground};

  ${({ few }) =>
  few &&
    `
      margin: 2rem;
      min-width: 100%;
    `};

  @media ${mediaQueries.phoneLandscape} {
    ${({ few }) =>
  few &&
  `
        max-width: 30rem;
        min-width: 30rem;
      `};
  }

  @media ${mediaQueries.tablet} {
    flex-direction: row;

    ${({ few }) =>
  few ?
    `
          flex-direction: column;
          flex-wrap: wrap;
          margin: 5rem;
          max-width: 3.9rem; 
        `
    :
    `
          width: calc(100%-2rem);
          margin-left: 2rem;
        `
  };
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
  padding: 2rem 2rem 4rem 2rem;
  
   ${({ few }) =>
  few &&
  `
      padding: 3rem 3rem 5rem 3rem;
    `};

  @media ${mediaQueries.tablet} {
    padding: 3rem 8rem 3rem 3rem;

    ${({ few }) =>
      few
        ? `
        padding: 3rem 3rem 5rem 3rem;
        `
        : 'flex-direction: row;'};
  }
`

const Desc = styled(Paragraph)`
  margin-top: ${({ few }) => (few ? '1rem' : '3rem')};
`

const Container = styled.div`
    ${({ few }) =>
  few ||
  `
        display: flex;
        flex-direction: column;
        align-items: flex-start; 
      `};

  @media ${mediaQueries.desktop} {
      ${({ few }) =>
  few ||
  `
          flex-direction: row;
          justify-content: space-between;
          align-items: center; 
        `};
  }
`

const AuthorSocialMediaList = styled(SocialMediaList)`
  padding-top: 1.5rem;

  @media ${mediaQueries.desktop} {
    padding: 0;
  }
`

class Author extends React.Component {
  render() {
    const {
      author: {
        name,
        shortBio,
        image,
        slug,
        facebook,
        twitter,
        telegram,
        youtube,
        vk,
      },
      authorPage,
      few,
    } = this.props

    return (
      <Element few={few}>
        {image && <AuthorImg img={image}/>}
        <Info few={few}>
          <Container few={few}>
            {name && (
              <Header size="Bigger" color="Black">
                {name}
              </Header>
            )}
            {authorPage && (
              <AuthorSocialMediaList
                urls={{
                  facebook,
                  twitter,
                  telegram,
                  youtube,
                  vk,
                }}
                isSemiTransparent
                isBig
              />
            )}
          </Container>
          {shortBio && (
            <Desc
              few={few}
              size="Bigger"
              weight="Light"
              lineHeight="Medium"
              color="Black"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: authorPage
                    ? shortBio.childMarkdownRemark.html
                    : shortBio.childMarkdownRemark.excerpt,
                }}
              />
            </Desc>
          )}
        </Info>
        {!authorPage && slug && (
          <Link to={`/author/${slug}`}>
            <ReadMoreBtn>Все тексты автора</ReadMoreBtn>
          </Link>
        )}
      </Element>
    )
  }
}

Author.propTypes = {
  author: PropTypes.any,
  authorPage: PropTypes.bool,
  few: PropTypes.bool,
}

export default Author
