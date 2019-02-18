import React, { Component } from 'react'
import styled from 'styled-components'

const StyledMenu = styled.div`
  position: fixed;
  width: 100vw;
`

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: pink;
`

const MenuIcon = styled.div`
  width: 20px;
  height: 19px;
  position: relative;
  /* position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10; */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 3px;
    background-color: #000;
    transform-origin: 0 0;
    transition: transform 0.3s ease-out;
    ${props => props.isMenuOpen && 'transform: rotate(45deg) scaleX(1.25)'};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20px;
    height: 3px;
    background-color: #000;
    transform-origin: 0 100%;
    transition: transform 0.3s ease-out;
    ${props =>
      props.isMenuOpen &&
      'transform: rotate(-45deg) scaleX(1.25) translateY(1px);'}
  }
`
const MenuIconMiddle = styled.div`
  position: absolute;
  top: 8px;
  left: 0;
  width: 20px;
  height: 3px;
  background-color: #000;
  transform-origin: 0 50%;
  transition: all 0.3s ease-out;
  ${props => props.isMenuOpen && 'opacity: 0; transform: scaleX(0);'}
`

const MenuContent = styled.div`
  opacity: 0;
  transform: scale(1.2);
  transition: all 0.3s ease-out;
  z-index: -10;
  position: relative;
  background: pink;
  text-align: center;
  ${props =>
    props.isMenuOpen && ' opacity: 1; z-index: 1; transform: scale(1);'}
`

class MobileMenu extends Component {
  state = {
    isMenuOpen: true,
  }
  toggleMenu = () => {
    this.setState(state => {
      return { isMenuOpen: !state.isMenuOpen }
    })
  }

  render() {
    const { isMenuOpen } = this.state
    return (
      <StyledMenu>
        <MenuHeader>
          <div>Logo</div>
          <MenuIcon onClick={this.toggleMenu} isMenuOpen={isMenuOpen}>
            <MenuIconMiddle isMenuOpen={isMenuOpen} />
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
