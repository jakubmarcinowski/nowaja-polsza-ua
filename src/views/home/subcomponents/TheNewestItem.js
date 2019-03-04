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
import playIcon from '../../../../static/icon-play.svg'

const Wrapper = styled.div`
  display: flex;
`
const ImgBox = styled.div`
  position: relative;
  flex: 0 0 46%;
  margin-right: 2.5rem;

  ${({ isMultimedia }) =>
    isMultimedia &&
    `&:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: black;
      opacity: 0.5;
      pointer-events: none;
    }`};
`
const ParagraphWrapper = styled.div`
  @media ${mediaQueries.desktop} {
    max-height: 7.8rem;
    overflow: hidden;
  }
`

const IconPlay = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 5rem;
  height: 5rem;
  z-index: 1;
  cursor: pointer;

  ${ImgBox}:hover & {
    opacity: 0.8;
  }
`

const TheNewestItem = ({
  article: { title, slug, authors, categories, heroImage, publishDate, lead },
}) => {
  const isMultimedia =
    categories &&
    categories.filter(({ slug }) => slug === 'multimedia').length > 0
  return (
    <Wrapper>
      <ImgBox isMultimedia={isMultimedia}>
        {isMultimedia && (
          <Link to={`/blog/${slug}`}>
            <IconPlay src={playIcon} alt="Play icon" />
          </Link>
        )}
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
            overflow="hidden"
            height="4.6"
          >
            <Link to={`/blog/${slug}`}>{title}</Link>
          </Header>
        )}
        <ArticleInfoBox
          authors={authors}
          publishDate={publishDate}
          size="Small"
        />
        {lead && (
          <ParagraphWrapper>
            <Link to={`/blog/${slug}`}>
              <Paragraph size="Medium" lineHeight="Medium" weight="Light">
                {lead}
              </Paragraph>
            </Link>
          </ParagraphWrapper>
        )}
      </div>
    </Wrapper>
  )
}

TheNewestItem.propTypes = {
  article: articleType,
}

export default TheNewestItem
