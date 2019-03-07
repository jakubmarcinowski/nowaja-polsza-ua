import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { childrenType } from '../types/children'

const StyledIconGroup = styled.div`
  display: flex;
  align-items: baseline;
  line-height: 2;
`
const Icon = styled.img`
  margin-right: 1.2rem;
`

const IconGroup = ({ src, children }) => (
  <div>
    <StyledIconGroup>
      <Icon src={src} />
      {children}
    </StyledIconGroup>
  </div>
)

IconGroup.propTypes = {
  children: childrenType,
  src: PropTypes.string,
}

export default IconGroup
