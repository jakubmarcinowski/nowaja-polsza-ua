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
      vertical && 'position: absolute; top: -80px; left: -30px;'}
  }
`
const Label = styled.label`
  display: none;

  @media ${mediaQueries.large} {
    display: inline-block;
    width: 70px;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 25px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ArticleSocialMediaList = ({ vertical }) => (
  <Container vertical={vertical}>
    {vertical && <Label>Share</Label>}
    <SocialMediaList article semiTransparent vertical={vertical} />
  </Container>
)

ArticleSocialMediaList.propTypes = {
  vertical: PropTypes.bool,
}

export default ArticleSocialMediaList
