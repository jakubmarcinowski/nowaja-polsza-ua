import React from 'react'
import styled from 'styled-components'

import SocialMediaList from '../../../components/SocialMediaList'
import { mediaQueries } from '../../../utils/mediaQueries'

const Container = styled.div`
  max-width: 200px;  
  margin: 0 auto;
  padding: 20px 0;

  @media ${mediaQueries.tablet} {
    padding: 50px 0;
  }
`

const ArticleSocialMediaList = () => (
  <Container>
    <SocialMediaList isBig isArticle isSemiTransparent/>
  </Container>
)

export default ArticleSocialMediaList
