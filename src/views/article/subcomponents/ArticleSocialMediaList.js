import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SocialMediaList from 'components/SocialMediaList'
import { mediaQueries } from 'utils/mediaQueries'
import { shareSocialMediaUrls } from 'utils/socialMedia'

const StyledArticleSocialMediaList = styled(SocialMediaList)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
  margin: 0 auto 2rem;
  padding: 2rem 0;

  @media ${mediaQueries.tablet} {
    padding: 2rem 0 3rem;
    margin: 0 auto 4rem;
  }

  @media ${mediaQueries.desktop} {
    padding: 0 0 5rem;
    margin: 0 auto 6rem;
  }
`

const ArticleSocialMediaList = ({ className, title }) => (
  <StyledArticleSocialMediaList
    isBig
    isShareUrl
    isSemiTransparent
    title={title}
    urls={shareSocialMediaUrls}
    className={className}
  />
)

ArticleSocialMediaList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
}

export default ArticleSocialMediaList
