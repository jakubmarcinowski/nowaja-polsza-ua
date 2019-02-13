import React from 'react'
import styled from 'styled-components'

import Portal from './Portal'
import { childrenType } from '../types/children'

const StyledModal = styled.div`
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-body {
    background: #fff;
    padding: 2rem;
    position: relative;
  }
`

const Modal = ({ children }) => (
  <Portal>
    <StyledModal className="modal">
      <div className="modal-body">{children}</div>
    </StyledModal>
  </Portal>
)

Modal.propTypes = {
  children: childrenType,
}

export default Modal
