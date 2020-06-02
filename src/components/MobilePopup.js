import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Portal from 'components/Portal'
import closeIcon from 'static/icon-close.svg'
import { mediaQueries } from 'utils/mediaQueries'

const CloseIcon = styled.img`
  position: relative;
  height: 2rem;
  width: 2rem;
  margin-left: 3rem;
  cursor: pointer;
`

const StyledMobilePopup = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.authorLink};
  background-color: white;
  justify-content: space-between;
  align-items: center;
  line-height: 1.6;
  z-index: 999;

  @media ${mediaQueries.desktop} {
    display: none;
  }
`

const StyledOverlay = styled.div`
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 998;

  @media ${mediaQueries.desktop} {
    display: none;
  }
`

const MobilePopup = ({ open, children, onClose }) => {
  if (!open) {
    return null
  }

  return (
    <Portal>
      <StyledMobilePopup>
        {children}
        <CloseIcon onClick={onClose} src={closeIcon} alt="close icon" />
      </StyledMobilePopup>
      <StyledOverlay />
    </Portal>
  )
}

MobilePopup.defaultProps = {
  aspectRatio: 16 / 9,
}

MobilePopup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element,
}

export default MobilePopup
