import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { articleType } from '../../../types/article'
import ImgWrapper from '../../../components/ImgWrapper'
import Paragraph from '../../../components/Paragraph'
import Header from '../../../components/Header'
import ArticleInfoBox from '../../../components/ArticleInfoBox'
import PhotoLabel from '../../../components/PhotoLabel'
import playIcon from '../../../../static/icon-play.svg'
import headphonesIcon from '../../../../static/icon-close.svg'
import AnimatedLink from '../../../components/AnimatedLink'

const NewestItemHeader = styled(Header)`
  max-height: 21.5rem;
`

const Wrapper = styled.div`
  //display: flex;
`

const ImgBox = styled.div`
  position: relative;
  height: 100%;

  ${({ isMultimedia, theme }) =>
  isMultimedia &&
  `&:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${theme.colors.black};
      opacity: 0.2;
      pointer-events: none;
    }`};
`

const IconPlay = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 5rem;
  height: 5rem;
  transition: opacity ${props => props.theme.animations.default};
  opacity: 0.7;
  z-index: 1;
  cursor: pointer;

  ${ImgBox}:hover & {
    opacity: 1;
  }
`

const ThumbnailWrapper = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  
  &::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient( to bottom, rgba(17,29,34,0), rgba(17,29,34,0.2) 20%, rgba(17,29,34,0.85) );
  }
`

const Thumbnail = styled(ImgWrapper)`
  transition: transform ${props => props.theme.animations.default};
  transform: scale(1.01);

  :hover {
    transform: scale(1.05);
  }
`

const SyledArticleInfoBox = styled(ArticleInfoBox)`
  color: white;
`

const Info = styled.div`
  position: absolute;
  max-height: 20.5rem;
  margin: 1rem;
  bottom: 0;
  z-index: 10;
`

const TheNewestItem = ({
  article: {
    title,
    body,
    slug,
    authors,
    authorsWithoutAccount,
    categories,
    heroImage,
    publishDate,
  },
}) => {
  const isMultimedia =
    categories &&
    categories.filter(({ slug }) => slug === 'mediateka').length > 0

  const isSoundCloud =
    body &&
    body.childMarkdownRemark &&
    body.childMarkdownRemark.html &&
    body.childMarkdownRemark.html.includes('src="https://w.soundcloud.com')

  return (
    <ImgBox isMultimedia={isMultimedia}>
      {isMultimedia && (
        <Link to={`/article/${slug}`}>
          <IconPlay
            src={isSoundCloud ? headphonesIcon : playIcon}
            alt="Play icon"
          />
        </Link>
      )}
      <ThumbnailWrapper>
        <Link to={`/article/${slug}`}>
          <Thumbnail img={heroImage} aspectRatio={1} />
        </Link>
        <Info>
          {slug && (
            <NewestItemHeader
              weight="Normal"
              type={2}
              size="MediumBig"
              color="white"
              margin=".65rem"
              lineHeight="Medium"
            >
              <AnimatedLink url={`/article/${slug}`} opacity={0.7}>
                {title}
              </AnimatedLink>
            </NewestItemHeader>
          )}
            </Info>
      </ThumbnailWrapper>
      {categories && (
        <Link to={`/category/${categories[0].slug}`}>
          <PhotoLabel color={categories[0].color}>
            {categories[0].title}
          </PhotoLabel>
        </Link>
      )}
    </ImgBox>
  )
}

TheNewestItem.propTypes = {
  article: articleType,
}

export default TheNewestItem
