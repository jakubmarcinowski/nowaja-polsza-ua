import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ImgWrapper from './ImgWrapper'
import Paragraph from './Paragraph'
import ArticleInfoBox from './ArticleInfoBox'
import Header from './Header'
import PhotoLabel from '../components/PhotoLabel'
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

const ArticleItemContainer = styled.div`
  position: relative;
  padding: 30px;
  background-color: #f5f5f5;
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
const StickedPost = ({
  post: {
    slug,
    authors,
    title,
    heroImage,
    summary,
    categories
  },
}) => {
  return (
    <ArticleItemContainer>
      <ImgBox>
        <ThumbnailWrapper>
          <Link to={`/article/${slug}`}>
            <Thumbnail img={heroImage} aspectRatio={1.76} />
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
      <ArticleInfoBox
        authors={authors}
      />
      {categories[0].slug && (
        <Text>
          {categories[0].slug && (
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
            <Link to={`/article/${slug}`}>
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

StickedPost.propTypes = {
  post: PropTypes.object,
}

export default StickedPost
