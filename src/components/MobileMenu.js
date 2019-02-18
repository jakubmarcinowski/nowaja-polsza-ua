import React, { Component } from 'react'
import styled from 'styled-components'

import MenuButton from './ManuButton'

const StyledMenu = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
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
          <MenuButton isMenuOpen onBtnClick={this.toggleMenu} />
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
