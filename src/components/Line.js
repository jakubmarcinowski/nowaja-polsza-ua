import React from 'react'
import styled from 'styled-components'

const Element = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.black};
`

const Line = () => <Element />

export default Line
