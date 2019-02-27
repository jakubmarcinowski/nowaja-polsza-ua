import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Brand from './Brand'
import { theme } from '../utils/theme'
import Navigation from './Navigation'
import Categories from './Categories'
import SocialMediaList from './SocialMediaList'
import { mediaQueries } from '../utils/mediaQueries'
import Wrapper from '../components/Wrapper'
import headerImg from '../../static/header-background.jpg'

const StyledPageHeader = styled.header`
  background: ${theme.colors.primary};
  background: ${props =>
      props.currentCategory
        ? props.theme.gradients.highlighted[props.currentCategory.color]
        : props.theme.gradients.header},
    url(${headerImg});
  background-position: 50% 50%;
  background-size: cover;
  padding: 1rem 0 2rem;
  text-align: center;
  z-index: 999;

  @media ${mediaQueries.phoneOnly} {
    display: none;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const PageHeader = ({ currentCategory }) => (
  <StyledPageHeader currentCategory={currentCategory}>
    <Wrapper>
      <Container>
        <Navigation />
        <SocialMediaList isHeader isSmiTransparent />
      </Container>
      <Brand isFullVersion isDarkVersion={false} />
      <Categories currentCategory={currentCategory} />
    </Wrapper>
  </StyledPageHeader>
)

PageHeader.propTypes = {
  currentCategory: PropTypes.any,
}

export default PageHeader
