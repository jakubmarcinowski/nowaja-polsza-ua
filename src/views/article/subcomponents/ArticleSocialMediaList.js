import React from 'react'
import styled from 'styled-components'

import SocialMediaList from '../../../components/SocialMediaList'
import { mediaQueries } from '../../../utils/mediaQueries'

const Container = styled.div`
  padding: 15px 0 30px;

  @media ${mediaQueries.tablet} {
    padding: 30px 0 50px;
  }
`

const ArticleSocialMediaList = () => (
  <Container>
    <SocialMediaList article semiTransparent />
  </Container>
)

ArticleSocialMediaList.propTypes = {}

export default ArticleSocialMediaList
