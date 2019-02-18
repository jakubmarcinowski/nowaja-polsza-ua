import React, { Component } from 'react'
import styled from 'styled-components'

const StyledMenu = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
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
    background-color: ${props => props.theme.colors.black};
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
  background: ${props => props.theme.colors.greyTeal};
`
const MenuContent = styled.div`
  position: relative;
  z-index: -10;
  transform: scale(1.2);
  transition: all 0.3s ease-out;
  padding: 1rem;
  opacity: 0;
  background: ${props => props.theme.colors.greyTeal};
  text-align: center;
  ${props =>
    props.isMenuOpen && ' opacity: 1; z-index: 1; transform: scale(1);'}
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
          <div>Logo</div>
          <MenuIcon onClick={this.toggleMenu} isMenuOpen={isMenuOpen}>
            <div className="middle" />
          </MenuIcon>
        </MenuHeader>
        <MenuContent isMenuOpen={isMenuOpen}>
          <nav>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </nav>
        </MenuContent>
      </StyledMenu>
    )
  }
}

export default MobileMenu
