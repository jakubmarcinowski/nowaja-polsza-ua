import React from 'react'
import styled from 'styled-components'

import Brand from './Brand'

const StyledPageHeader = styled.header`
  background: #aaa;
  padding: 24px 0;
  text-align: center;
`

const PageHeader = () => {
  return (
    <StyledPageHeader>
      <Brand />
    </StyledPageHeader>
  )
}

export default PageHeader
