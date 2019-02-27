import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SocialMediaList from '../../../components/SocialMediaList'
import { mediaQueries } from '../../../utils/mediaQueries'

const Container = styled.div`
  padding: 20px 0;

  @media ${mediaQueries.tablet} {
    padding: 50px 0;
  }

  @media ${mediaQueries.large} {
    ${({ isVertical }) =>
      isVertical && 'position: absolute; top: -80px; left: 2.5rem;'}
  }
`

const ArticleSocialMediaList = ({ isVertical }) => (
  <Container isVertical={isVertical}>
    <SocialMediaList isArticle isSemiTransparent isVertical={isVertical} />
  </Container>
)

ArticleSocialMediaList.propTypes = {
  isVertical: PropTypes.bool,
}

export default ArticleSocialMediaList
