import React from 'react'
import styled from 'styled-components'

import { childrenType } from 'types/children'
import { mediaQueries } from 'utils/mediaQueries'

const StyledPlaceholder = styled.div`
  padding: 2rem;
  text-align: center;

  @media ${mediaQueries.tablet} {
    padding: 3rem;
  }

  @media ${mediaQueries.desktop} {
    padding: 5rem;
  }
`

const Placeholder = ({ children }) => (
  <StyledPlaceholder>{children}</StyledPlaceholder>
)

Placeholder.propTypes = {
  children: childrenType,
}

export default Placeholder
