import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SocialMediaList from 'components/SocialMediaList'
import { shareSocialMediaUrls } from 'utils/socialMedia'

const StyledArticleSocialMediaList = styled(SocialMediaList)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
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
