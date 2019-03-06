import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaQueries } from '../utils/mediaQueries'
import { childrenType } from '../types/children'

const ReadMore = styled.button`
  cursor: pointer;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyDark};
  background: none;
  color: ${({ theme }) => theme.colors.greyDark};
  text-transform: uppercase;
  font-weight: 700;

  &:focus {
    outline: none;
  }

  @media ${mediaQueries.tablet} {
    font-size: 1.6rem;
  }
`

const ReadMoreButton = ({ children, onClick }) => (
  <ReadMore onClick={onClick}>{children}</ReadMore>
)

ReadMoreButton.propTypes = {
  children: childrenType,
  onClick: PropTypes.func,
}

export default ReadMoreButton
