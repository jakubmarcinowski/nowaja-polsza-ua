import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ImgWrapper from './ImgWrapper'
import Header from './Header'
import Paragraph from './Paragraph'
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

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    margin-top: 8rem;
    margin-bottom: 10rem;
  }
`

const Info = styled.div`
  padding: 2rem 2rem 4rem 2rem;
  
  @media ${mediaQueries.tablet} {
    padding: 3rem 8rem 5rem 3rem;
`

const Desc = styled(Paragraph)`
  margin-top: 3rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${mediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
        facebook,
        twitter,
        telegram,
        youtube,
        vk,
      },
    } = this.props

    return (
      <Element>
        {image && <AuthorImg img={image}/>}
        <Info>
          <Container>
            {name && (
              <Header size="Bigger" color="Black">
                {name}
              </Header>
            )}
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
          </Container>
          {shortBio && (
            <Desc
              size="Biggest"
              weight="Light"
              lineHeight="Medium"
              color="Black"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: shortBio.childMarkdownRemark.html,
                }}
              />
            </Desc>
          )}
        </Info>
      </Element>
    )
  }
}

Author.propTypes = {
  author: PropTypes.any,
}

export default Author
