import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { mediaQueries } from 'utils/mediaQueries'
import Header from 'components/Header'
import logo from 'static/logo.svg'
import logoWithBackground from 'static/logo-with-background.svg'
import { trans } from 'utils/translate'

const StyledBrand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Logo = styled.img`
  display: block;
  max-height: ${props => (props.isDarkVersion ? '18px' : '35px')};

  @media ${mediaQueries.desktop} {
    max-height: 37px;
  }
`

const Title = styled(Header)`
  display: table-caption;
  font-size: 1.4rem;

  @media ${mediaQueries.desktop} {
    font-size: 2rem;
  }
`

const TitleWrapper = styled.div`
  margin-left: ${props => (props.isDarkVersion ? '15px' : '7px')};

  @media ${mediaQueries.desktop} {
    margin-left: 2rem;
  }
`

const Brand = ({ isDarkVersion }) => (
  <StyledBrand href="/">
    <Link to="/">
      <Logo
        isDarkVersion={isDarkVersion}
        src={isDarkVersion ? logo : logoWithBackground}
        alt="Nowaja Polsza logo"
      />
    </Link>
    <Link to="/">
      <TitleWrapper isDarkVersion={isDarkVersion}>
        <Title color={isDarkVersion ? 'Dark' : 'White'} weight="Bold">
          {trans('BRAND')}
        </Title>
      </TitleWrapper>
    </Link>
  </StyledBrand>
)

Brand.propTypes = {
  isDarkVersion: PropTypes.bool,
}

export default Brand
