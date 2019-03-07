import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { articleType } from '../types/article'
import ImgWrapper from './ImgWrapper'
import Paragraph from './Paragraph'
import ArticleInfoBox from './ArticleInfoBox'
import Header from './Header'
import PhotoLabel from '../components/PhotoLabel'
import playIcon from '../../static/icon-play.svg'
import headphonesIcon from '../../static/icon-headphones.svg'
import AnimatedLink from './AnimatedLink'

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
  opacity: 0.7;
  cursor: pointer;

  ${ImgBox}:hover & {
    opacity: 1;
  }
`

// @todo make one component to wrap ArticleItem and TheNewestItem
const ArticleItem = ({
  article: {
    title,
    body,
    slug,
    authors,
    categories,
    heroImage,
    publishDate,
    lead,
  },
  noCategoryLabel,
}) => {
  const isMultimedia =
    categories &&
    categories.filter(({ slug }) => slug === 'multimedia').length > 0

  const isSoundCloud =
    body &&
    body.childMarkdownRemark &&
    body.childMarkdownRemark.html &&
    body.childMarkdownRemark.html.includes('src="https://w.soundcloud.com')

  return (
    <>
      <ImgBox isMultimedia={isMultimedia}>
        {isMultimedia && (
          <Link to={`/blog/${slug}`}>
            <IconPlay
              src={isSoundCloud ? headphonesIcon : playIcon}
              alt="Play icon"
            />
          </Link>
        )}
        <Link to={`/blog/${slug}`}>
          <ImgWrapper img={heroImage} aspectRatio={1.76} />
        </Link>
        {!noCategoryLabel && categories && (
          <Link to={`/category/${categories[0].slug}`}>
            <PhotoLabel color={categories[0].color}>
              {categories[0].title}
            </PhotoLabel>
          </Link>
        )}
      </ImgBox>
      <ArticleInfoBox authors={authors} publishDate={publishDate} />
      {slug && (
        <>
          {slug && (
            <Header
              weight="Bold"
              type={2}
              size="Big"
              color="Dark"
              margin="0 0 1.4rem"
              lineHeight="Medium"
              overflow="hidden"
              height="6.2"
            >
              <AnimatedLink url={`/blog/${slug}`} opacity={0.7}>
                {title}
              </AnimatedLink>
            </Header>
          )}
          {lead && (
            <Link to={`/blog/${slug}`}>
              <Paragraph size="Big" lineHeight="Medium" weight="Light">
                {lead}
              </Paragraph>
            </Link>
          )}
        </>
      )}
    </>
  )
}

ArticleItem.propTypes = {
  article: articleType,
  noCategoryLabel: PropTypes.bool,
}

export default ArticleItem
