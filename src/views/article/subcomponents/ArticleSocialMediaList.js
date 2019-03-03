import React from 'react'
import styled from 'styled-components'

import SocialMediaList from '../../../components/SocialMediaList'
import { mediaQueries } from '../../../utils/mediaQueries'
import { getShareSocialMediaUrls } from '../../../utils/socialMedia'

const StyledArticleSocialMediaList = styled(SocialMediaList)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
  margin: 0 auto;
  padding: 20px 0;

  @media ${mediaQueries.tablet} {
    padding: 50px 0;
  }
`

const ArticleSocialMediaList = () => (
  <StyledArticleSocialMediaList
    isBig
    isShareUrl
    isSemiTransparent
    urls={getShareSocialMediaUrls()}
  />
)

export default ArticleSocialMediaList
