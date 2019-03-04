import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Brand from './Brand'
import { theme } from '../utils/theme'
import Categories from './Categories'
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

const PageHeader = ({ currentCategory }) => (
  <StyledPageHeader currentCategory={currentCategory}>
    <Wrapper>
      <Brand isFullVersion isDarkVersion={false} isInHeader/>
      <Categories currentCategory={currentCategory} />
    </Wrapper>
  </StyledPageHeader>
)

PageHeader.propTypes = {
  currentCategory: PropTypes.any,
}

export default PageHeader
