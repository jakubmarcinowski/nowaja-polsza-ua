import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledWrapper = styled.div`
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
`

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Wrapper
