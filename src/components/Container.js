import React from 'react'
import styled from 'styled-components'

import { childrenType } from '../types/children'

const StyledContainer = styled.div`
  margin: 0 auto;
`

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

Container.propTypes = {
  children: childrenType,
}

export default Container
