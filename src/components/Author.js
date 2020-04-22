import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ImgWrapper from 'components/ImgWrapper'
import Header from 'components/Header'
import Paragraph from 'components/Paragraph'
import { mediaQueries } from 'utils/mediaQueries'
import SocialMediaList from 'components/SocialMediaList'

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
  min-width: 100%;
  margin: 0 auto 2rem;
  background: ${({ theme }) => theme.colors.listItemBackground};

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    margin: 0 auto 5rem;
  }

  @media ${mediaQueries.desktop} {
    margin: 5rem auto 10rem;
  }
`

const Info = styled.div`
  width: 100%;
  padding: 2rem 2rem 4rem 2rem;

  @media ${mediaQueries.tablet} {
    padding: 3rem 8rem 5rem 3rem;
  }
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

const Author = ({
  author: {
    name,
    shortBio,
    image,
    facebook,
    twitter,
    telegram,
    youtube,
    vk,
    academia,
  },
}) => (
  <Element>
    {image && <AuthorImg img={image} />}
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
            academia,
          }}
          isSemiTransparent
        />
      </Container>
      {shortBio && (
        <Desc size="Biggest" weight="Light" lineHeight="Medium" color="Black">
          <div
            dangerouslySetInnerHTML={{
              __html: shortBio.childMarkdownRemark.html,
            }}
          />
        </Desc>
      )}
    </Info>
  </Element>
)

Author.propTypes = {
  author: PropTypes.any,
}

export default Author
