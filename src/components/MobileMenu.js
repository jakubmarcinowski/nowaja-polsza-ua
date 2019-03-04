import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaQueries } from '../utils/mediaQueries'
import Brand from './Brand'
import SocialMediaList from './SocialMediaList'
import MobileMenuItems from './MobileMenuItems'
import MobileMenuCategories from './MobileMenuCategories'
import headerImg from '../../static/header-background.jpg'
import { novPolSocialMediaUrls } from '../utils/socialMedia'

const MenuIcon = styled.div`
  position: relative;
  width: 20px;
  height: 19px;

  &::before,
  &::after,
  .middle {
    position: absolute;
    left: 0;
    width: 20px;
    height: 3px;
    transition: transform 0.3s ease-out;
    background-color: ${props => props.theme.colors.white};
  }

  &::before {
    content: '';
    top: 0;
    transform-origin: 0 0;
    ${props => props.isMenuOpen && 'transform: rotate(45deg) scaleX(1.25)'};
  }

  &::after {
    content: '';
    bottom: 0;
    transform-origin: 0 100%;
    ${props =>
      props.isMenuOpen &&
      'transform: rotate(-45deg) scaleX(1.25) translateY(1px);'}
  }
  .middle {
    top: 8px;
    transform-origin: 0 50%;
    ${props => props.isMenuOpen && 'opacity: 0; transform: scaleX(0);'}
  }
`
const MenuHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  background: ${props =>
      props.currentCategory
        ? props.theme.gradients.highlighted[props.currentCategory.color]
        : props.theme.gradients.header},
    url(${headerImg});
  background-position: 50% 50%;
  background-size: cover;
  z-index: 999;

  @media ${mediaQueries.tablet} {
    display: none;
  }
`
const MenuContent = styled.div`
  position: fixed;
  display: flex;
  top: 6rem;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 6rem);
  padding: 40px 0;
  transform: scale(1.2);
  transition: all 0.3s ease-out;
  opacity: 0;
  background: ${props => props.theme.colors.menuBackground};
  color: ${props => props.theme.colors.white};
  text-align: center;
  z-index: -10;
  ${props =>
    props.isMenuOpen && 'opacity: 1; z-index: 999; transform: scale(1);'}
`

const Line = styled.div`
  height: 2px;
  width: 190px;
  margin: 15px auto 40px;
  background: ${props => props.theme.colors.white};
`

const MobileSocialMediaList = styled(SocialMediaList)`
  margin: 0 auto;
`

class MobileMenu extends Component {
  state = {
    isMenuOpen: false,
  }
  toggleMenu = () => {
    this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }))
  }

  render() {
    const { isMenuOpen } = this.state
    const { currentCategory } = this.props

    return (
      <>
        <MenuHeader currentCategory={currentCategory}>
          <Brand isDarkVersion={false} />
          <MenuIcon onClick={this.toggleMenu} isMenuOpen={isMenuOpen}>
            <div className="middle" />
          </MenuIcon>
        </MenuHeader>
        <MenuContent isMenuOpen={isMenuOpen}>
          <nav>
            <MobileMenuCategories currentCategory={currentCategory} />
            <Line />
            <MobileMenuItems />
          </nav>
          <MobileSocialMediaList isWhite urls={novPolSocialMediaUrls}/>
        </MenuContent>
      </>
    )
  }
}

MobileMenu.propTypes = {
  currentCategory: PropTypes.any,
}

export default MobileMenu
