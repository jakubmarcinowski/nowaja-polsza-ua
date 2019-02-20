import React, { Component } from 'react'
import styled from 'styled-components'

import { mediaQueries } from '../utils/mediaQueries'
import Brand from './Brand'
import { Link, StaticQuery } from 'gatsby'
import { navigationQuery } from './Navigation'
import { categoriesQuery } from './Categories'
import SocialMediaList from './SocialMediaList'

const StyledMenu = styled.header`
  position: fixed;
  z-index: 999;
  width: 100vw;

  @media ${mediaQueries.tablet} {
    display: none;
  }
`
const MenuIcon = styled.div`
  width: 20px;
  height: 19px;
  position: relative;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 1rem;
  background: ${props => props.theme.colors.primary};
  background: ${props => props.theme.gradients.header},
    url('./header-background.jpg');
  background-position: 50% 50%;
`
const MenuContent = styled.div`
  position: relative;
  display: flex;
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
  ${props => props.isMenuOpen && 'opacity: 1; z-index: 1; transform: scale(1);'}
`

const MenuItem = styled.li`
  padding-bottom: 25px;
  line-height: 1.2;
  letter-spacing: 0.6px;
  color: ${props => props.theme.colors.white};
  font-size: 1.6rem;

  &:hover {
    color: ${props => props.theme.colors.highlighted[props.color]};
  }
`

const Line = styled.div`
  height: 2px;
  width: 190px;
  margin: 15px auto 40px;
  background: ${props => props.theme.colors.white};
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
    return (
      <StyledMenu>
        <MenuHeader>
          <Brand isDarkVersion={false} />
          <MenuIcon onClick={this.toggleMenu} isMenuOpen={isMenuOpen}>
            <div className="middle" />
          </MenuIcon>
        </MenuHeader>
        <MenuContent isMenuOpen={isMenuOpen}>
          <nav>
            <ul>
              <StaticQuery
                query={categoriesQuery}
                render={({ allContentfulCategory }) => (
                  <>
                    {allContentfulCategory &&
                      allContentfulCategory.edges &&
                      allContentfulCategory.edges.map(({ node }) => (
                        <MenuItem key={node.slug} color={node.color}>
                          <Link to={`category/${node.slug}`}>{node.title}</Link>
                        </MenuItem>
                      ))}
                  </>
                )}
              />
            </ul>
            <Line />
            <ul>
              <StaticQuery
                query={navigationQuery}
                render={({ allContentfulMenuItem }) => (
                  <>
                    {allContentfulMenuItem &&
                      allContentfulMenuItem.edges &&
                      allContentfulMenuItem.edges.map(({ node }) => (
                        <MenuItem key={node.slug}>
                          <Link to={node.slug}>{node.name}</Link>
                        </MenuItem>
                      ))}
                  </>
                )}
              />
            </ul>
          </nav>
          <SocialMediaList header />
        </MenuContent>
      </StyledMenu>
    )
  }
}

export default MobileMenu
