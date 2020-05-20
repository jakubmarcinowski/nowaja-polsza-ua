import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import { childrenType } from 'types/children'

const StyledPageHeading = styled(Header)`
  text-align: center;
  margin-bottom: 3rem;
`

const PageHeading = ({ children }) => (
  <StyledPageHeading size="Bigger" weight="Bold" color="Dark">
    {children}
  </StyledPageHeading>
)

PageHeading.propTypes = {
  children: childrenType.isRequired,
}

export default PageHeading
