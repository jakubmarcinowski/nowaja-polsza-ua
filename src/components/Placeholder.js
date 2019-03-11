import React from 'react'
import styled from 'styled-components'

import { childrenType } from '../types/children'

const StyledPlaceholder = styled.div`
  padding: 2em;
  text-align: center;
`

const Placeholder = ({ children }) => (
  <StyledPlaceholder>{children}</StyledPlaceholder>
)

Placeholder.propTypes = {
  children: childrenType,
}

export default Placeholder
