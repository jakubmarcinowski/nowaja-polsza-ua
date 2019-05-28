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
  display: flex;
  max-height: 50%;
  overflow: hidden;
`

const ImgBox = styled.div`
  position: relative;
  flex: 0 0 46%;
  margin-right: 2.5rem;

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
  overflow: hidden;
`

const Thumbnail = styled(ImgWrapper)`
  transition: transform ${props => props.theme.animations.default};
  transform: scale(1.01);

  ${Wrapper}:hover & {
    transform: scale(1.05);
  }
`

const Info = styled.div`
  max-height: 20.5rem;
  overflow: hidden;
`

const TheNewestItem = ({
  article: {
    title,
    body,
    summary,
    slug,
    authors,
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
    <Wrapper>
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
        </ThumbnailWrapper>
        {categories && (
          <Link to={`/category/${categories[0].slug}`}>
            <PhotoLabel color={categories[0].color}>
              {categories[0].title}
            </PhotoLabel>
          </Link>
        )}
      </ImgBox>
      <Info>
        {slug && (
          <NewestItemHeader
            weight="Bold"
            type={2}
            size="MediumBig"
            color="Dark"
            margin="0 0 1rem"
            lineHeight="Medium"
            overflow="hidden"
          >
            <AnimatedLink url={`/article/${slug}`} opacity={0.7}>
              {title}
            </AnimatedLink>
          </NewestItemHeader>
        )}
        <ArticleInfoBox
          authors={authors}
          publishDate={publishDate}
          size="Small"
        />
        {summary && (
          <Link to={`/article/${slug}`}>
            <Paragraph size="Medium" lineHeight="Medium" weight="Light">
              {summary}
            </Paragraph>
          </Link>
        )}
      </Info>
    </Wrapper>
  )
}

TheNewestItem.propTypes = {
  article: articleType,
}

export default TheNewestItem
