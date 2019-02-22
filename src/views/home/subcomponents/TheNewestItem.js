import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { articleType } from '../../../types/article'
import ImgWrapper from '../../../components/ImgWrapper'
import Paragraph from '../../../components/Paragraph'
import Header from '../../../components/Header'
import { mediaQueries } from '../../../utils/mediaQueries'
import ArticleInfoBox from '../../../components/ArticleInfoBox'
import PhotoLabel from '../../../components/PhotoLabel'

const Wrapper = styled.div`
  display: flex;
`
const ImgBox = styled.div`
  position: relative;
  flex: 0 0 46%;
  margin-right: 2.5rem;
`
const ParagraphWrapper = styled.div`
  @media ${mediaQueries.desktop} {
    max-height: 7.6rem;
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
        <Link to={`/category/${categories[0].slug}`}>
          <PhotoLabel color={categories[0].color}>
            {categories[0].title}
          </PhotoLabel>
        </Link>
      )}
    </ImgBox>
    <div>
      {slug && (
        <Header
          weight="Bold"
          type={2}
          size="MediumBig"
          color="Dark"
          margin="0 0 1rem"
          lineHeight="Medium"
          overflow
          height="5.2"
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
    </div>
  </Wrapper>
)

TheNewestItem.propTypes = {
  article: articleType,
}

export default TheNewestItem
