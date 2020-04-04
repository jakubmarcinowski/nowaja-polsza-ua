import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { articleType } from '../../../types/article'
import ImgWrapper from '../../../components/ImgWrapper'
import Header from '../../../components/Header'
import PhotoLabel from '../../../components/PhotoLabel'
import playIcon from '../../../../static/icon-play.svg'
import headphonesIcon from '../../../../static/icon-close.svg'
import AnimatedLink from '../../../components/AnimatedLink'
import { mediaQueries } from '../../../utils/mediaQueries'

const NewestItemHeader = styled(Header)`
  max-height: 21.5rem;
`
const ImgBox = styled.div`
  position: relative;
  height: 100%;
  max-height: 33vh;

  @media ${mediaQueries.phoneLandscape} {
  max-height: none;
  }

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
    pointer-events: none;
    background-image: ${({ theme }) => theme.gradients.hero};
  }
`

const Thumbnail = styled(ImgWrapper)`
  transition: transform ${props => props.theme.animations.default};
  transform: scale(1.01);

  :hover {
    transform: scale(1.05);
  }
  
   ${ThumbnailWrapper}:hover & {
    transform: scale(1.05);
  }
`

const Info = styled.div`
  position: absolute;
  max-height: 20.5rem;
  margin: 1rem;
  bottom: 5rem;
  text-align: center;
  z-index: 10;
  
  @media ${mediaQueries.desktop} {
  bottom: 0;
  text-align: left;
}
`

const TheNewestItem = ({
  article: {
    title,
    body,
    slug,
    categories,
    heroImage,
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
          <PhotoLabel color={categories[0].color} >
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
