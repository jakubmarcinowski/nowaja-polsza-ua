import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { articleType } from '../../../types/article'
import ImgWrapper from '../../../components/ImgWrapper'
import Paragraph from '../../../components/Paragraph'
import Header from '../../../components/Header'
import { mediaQueries } from '../../../utils/mediaQueries'
import ArticleInfoBox from '../../../components/ArticleInfoBox'

const Wrapper = styled.div`
  display: flex;
`
const ContentWrapper = styled.div`
  overflow: hidden;
  max-height: 21rem;
`
const ImgBox = styled.div`
  position: relative;
  flex: 0 0 46%;
  margin-right: 2.5rem;
`
const CategoryLink = styled(Link)`
  position: absolute;
  top: 7px;
  left: -3px;
  display: block;
  padding: 0.5rem;
  transition: opacity ${props => props.theme.animations.default};
  background: ${props => props.theme.colors.highlighted.rouge};
  color: ${props => props.theme.colors.white};

  &:hover {
    opacity: 0.9;
  }
`

const ParagraphWrapper = styled.div`
  @media ${mediaQueries.desktop} {
    max-height: 7.5rem;
    overflow: hidden;
  }
`

const TheNewestItem = ({
  article: { title, slug, author, categories, heroImage, publishDate, lead },
}) => (
  <Wrapper>
    <ImgBox>
      <Link to={`/blog/${slug}`}>
        <ImgWrapper img={heroImage} aspectRatio={1} />
      </Link>
      {categories && (
        <CategoryLink
          color={categories[0].color}
          to={`/category/${categories[0].slug}`}
        >
          {categories[0].title}
        </CategoryLink>
      )}
    </ImgBox>
    <ContentWrapper>
      {slug && (
        <Header
          weight="Bold"
          type={2}
          size="MediumBig"
          color="Dark"
          margin="0 0 1rem"
          lineHeight="Medium"
        >
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Header>
      )}
      <ArticleInfoBox author={author} publishDate={publishDate} size="Small" />
      {lead && (
        <ParagraphWrapper>
          <Link to={`/blog/${slug}`}>
            <Paragraph size="Medium" lineHeight="Medium">
              {lead}
            </Paragraph>
          </Link>
        </ParagraphWrapper>
      )}
    </ContentWrapper>
  </Wrapper>
)

TheNewestItem.propTypes = {
  article: articleType,
}

export default TheNewestItem
