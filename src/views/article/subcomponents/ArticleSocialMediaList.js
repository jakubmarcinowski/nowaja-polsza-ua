import React from 'react'
import styled from 'styled-components'

import SocialMediaList from '../../../components/SocialMediaList'
import { mediaQueries } from '../../../utils/mediaQueries'
import { shareSocialMediaUrls } from '../../../utils/socialMedia'

const StyledArticleSocialMediaList = styled(SocialMediaList)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
  margin: 0 auto 3rem;
  padding: 20px 0;

  @media ${mediaQueries.tablet} {
    padding: 50px 0;
    margin: 0 auto 5rem;
  }
`

const ArticleSocialMediaList = () => (
  <StyledArticleSocialMediaList
    isBig
    isShareUrl
    isSemiTransparent
    urls={shareSocialMediaUrls}
  />
)

export default ArticleSocialMediaList
