import React from 'react'
import styled from 'styled-components'

import Header from 'components/Header'
import Line from 'components/Line'
import { childrenType } from 'types/children'

const HeaderWrapper = styled.div`
  max-width: 83rem;
  margin: 0 auto;
`

const HeaderWithLine = ({ children }) => (
  <HeaderWrapper>
    <Header
      size="Bigger"
      margin="5rem auto"
      color="Black"
      weight="Bold"
      type={2}
      textAlign="center"
    >
      {children}
    </Header>
    <Line />
  </HeaderWrapper>
)

HeaderWithLine.propTypes = {
  children: childrenType,
}

export default HeaderWithLine
