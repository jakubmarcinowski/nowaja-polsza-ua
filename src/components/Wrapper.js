import React from 'react'
import styled from 'styled-components'
import { childrenType } from '../types/children'

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 5vmin 0;
`

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

Wrapper.propTypes = {
  children: childrenType,
}

export default Wrapper
