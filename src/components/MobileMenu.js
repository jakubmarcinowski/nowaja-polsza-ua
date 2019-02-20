import React, { Component } from 'react'
import styled from 'styled-components'

import { mediaQueries } from '../utils/mediaQueries'
import Brand from './Brand'
import { Link, StaticQuery } from 'gatsby'
import { navigationQuery } from './Navigation'

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
  padding: 1rem;
  background: ${props => props.theme.colors.primary};
  background: ${props => props.theme.gradients.header},
    url('./header-background.jpg');
  background-position: 50% 50%;
`
const MenuContent = styled.div`
  position: relative;
  z-index: -10;
  transform: scale(1.2);
  transition: all 0.3s ease-out;
  opacity: 0;
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
  text-align: center;
  ${props =>
    props.isMenuOpen && ' opacity: 1; z-index: 1; transform: scale(1);'}
`

const MenuItem = styled.li`
  line-height: 6rem;
  border-bottom: 1px solid ${props => props.theme.colors.white};

  &:last-of-type {
    border-bottom: 0;
  }
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
              <MenuItem>category 1</MenuItem>
              <MenuItem>category 2</MenuItem>
              <MenuItem>category 3</MenuItem>
              <MenuItem>category 4</MenuItem>
            </ul>
          </nav>
        </MenuContent>
      </StyledMenu>
    )
  }
}

export default MobileMenu
