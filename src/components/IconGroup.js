import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { childrenType } from '../types/children'

const StyledIconGroup = styled.div`
  display: flex;
  align-items: center;
  line-height: 2;
`
const Icon = styled.img`
  width: 1.4rem;
  margin-right: 1.2rem;
`

const IconGroup = ({ className, src, children }) => (
  <div>
    <StyledIconGroup className={className}>
      <Icon src={src} />
      {children}
    </StyledIconGroup>
  </div>
)

IconGroup.propTypes = {
  children: childrenType,
  src: PropTypes.string,
  className: PropTypes.string,
}

export default IconGroup
