import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MenuIcon = styled.div`
  width: 20px;
  height: 19px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 3px;
    transform-origin: 0 0;
    transition: transform 0.3s ease-out;
    background-color: #000;
    ${props => props.isMenuOpen && 'transform: rotate(45deg) scaleX(1.25)'};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20px;
    height: 3px;
    transform-origin: 0 100%;
    transition: transform 0.3s ease-out;
    background-color: #000;
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
  transform-origin: 0 50%;
  transition: all 0.3s ease-out;
  background-color: #000;
  ${props => props.isMenuOpen && 'opacity: 0; transform: scaleX(0);'}
`

const ManuButton = ({ isMenuOpen, onBtnClick }) => (
  <MenuIcon onClick={onBtnClick} isMenuOpen={isMenuOpen}>
    <MenuIconMiddle isMenuOpen={isMenuOpen} />
  </MenuIcon>
)

ManuButton.propTypes = {
  isMenuOpen: PropTypes.bool,
  onBtnClick: PropTypes.func,
}

export default ManuButton
