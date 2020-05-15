import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { articleType } from 'types/article'
import ImgWrapper from 'components/ImgWrapper'
import Paragraph from 'components/Paragraph'
import ArticleInfoBox from 'components/ArticleInfoBox'
import Header from 'components/Header'
import PhotoLabel from 'components/PhotoLabel'
import playIcon from 'static/icon-play.svg'
import headphonesIcon from 'static/icon-headphones.svg'
import AnimatedLink from 'components/AnimatedLink'

const ImgBox = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

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
  z-index: 1;
  transition: opacity ${props => props.theme.animations.default};
  opacity: 0.7;
  cursor: pointer;

  ${ImgBox}:hover & {
    opacity: 1;
  }
`

const ArticleItemContainer = styled.div`
  position: relative;
`

const ThumbnailWrapper = styled.div`
  overflow: hidden;
  height: 100%;
`

const Thumbnail = styled(ImgWrapper)`
  transition: transform ${props => props.theme.animations.default};

  ${ArticleItemContainer}:hover & {
    transform: scale(1.05);
  }
`

const Text = styled.div`
  max-height: 21rem;
  overflow: hidden;
`

// @todo make one component to wrap ArticleItem and TheNewestItem
const ArticleItem = ({
  article: {
    title,
    body,
    slug,
    authors,
    authorsWithoutAccount,
    categories,
    heroImage,
    heroImageThumbnail,
    summary,
  },
  noCategoryLabel,
}) => {
  const isMultimedia =
    categories &&
    categories.filter(({ slug }) => slug === 'mediateka').length > 0

  const isSoundCloud =
    body &&
    body.childMarkdownRemark &&
    body.childMarkdownRemark.html &&
    body.childMarkdownRemark.html.includes('src="https://w.soundcloud.com')
  const img = heroImageThumbnail ? heroImageThumbnail : heroImage
  img.title = `${title} image`
  return (
    <ArticleItemContainer>
      <ImgBox isMultimedia={isMultimedia}>
        {isMultimedia && (
          <Link to={`/article/${slug}`}>
            <IconPlay
              src={!isSoundCloud ? headphonesIcon : playIcon}
              alt="Play icon"
            />
          </Link>
        )}
        <ThumbnailWrapper>
          <Link to={`/article/${slug}`} title={slug}>
            <Thumbnail img={img} aspectRatio={1.76} />
          </Link>
        </ThumbnailWrapper>
        {!noCategoryLabel && categories && (
          <Link
            to={`/category/${categories[0].slug}`}
            title={categories[0].slug}
          >
            <PhotoLabel color={categories[0].color}>
              {categories[0].title}
            </PhotoLabel>
          </Link>
        )}
      </ImgBox>
      <ArticleInfoBox
        authors={authors}
        authorsWithoutAccount={authorsWithoutAccount}
      />
      {slug && (
        <Text>
          {slug && (
            <Header
              weight="Bold"
              type={2}
              size="Big"
              color="Dark"
              margin="0 0 1.4rem"
              lineHeight="Medium"
              overflow="hidden"
            >
              <AnimatedLink url={`/article/${slug}`} opacity={0.7}>
                {title}
              </AnimatedLink>
            </Header>
          )}
          {summary && (
            <Link to={`/article/${slug}`} title={slug}>
              <Paragraph size="Big" lineHeight="Medium" weight="Light">
                {summary}
              </Paragraph>
            </Link>
          )}
        </Text>
      )}
    </ArticleItemContainer>
  )
}

ArticleItem.propTypes = {
  article: articleType,
  noCategoryLabel: PropTypes.bool,
}

export default ArticleItem
