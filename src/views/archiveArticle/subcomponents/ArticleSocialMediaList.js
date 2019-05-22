import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SocialMediaList from '../../../components/SocialMediaList'
import { mediaQueries } from '../../../utils/mediaQueries'
import { shareSocialMediaUrls } from '../../../utils/socialMedia'

const StyledArticleSocialMediaList = styled(SocialMediaList)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
  margin: 0 auto 0.5rem;
  padding: 2rem 0;

  @media ${mediaQueries.tablet} {
    padding: 2rem 0 3rem;
    margin: 0 auto 1.5rem;
  }

  @media ${mediaQueries.desktop} {
    padding: 0 0 5rem;
    margin: 0 auto 3rem;
  }
`

const ArticleSocialMediaList = ({ className }) => (
  <StyledArticleSocialMediaList
    isBig
    isShareUrl
    isSemiTransparent
    urls={shareSocialMediaUrls}
    className={className}
  />
)

ArticleSocialMediaList.propTypes = {
  className: PropTypes.string,
}

export default ArticleSocialMediaList
