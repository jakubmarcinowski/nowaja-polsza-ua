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
    ${({ vertical }) =>
      vertical && 'position: absolute; top: -80px; left: 3rem;'}
  }
`

const ArticleSocialMediaList = ({ vertical }) => (
  <Container vertical={vertical}>
    <SocialMediaList article semiTransparent vertical={vertical} />
  </Container>
)

ArticleSocialMediaList.propTypes = {
  vertical: PropTypes.bool,
}

export default ArticleSocialMediaList
