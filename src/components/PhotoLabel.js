import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from 'types/children'
import Label from 'components/Label'

const PhotoLabelStyled = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  left: -5px;
`

const PhotoLabel = ({ color, children }) => (
  <PhotoLabelStyled>
    <Label color={color}>{children}</Label>
  </PhotoLabelStyled>
)

PhotoLabel.propTypes = {
  children: childrenType.isRequired,
  color: PropTypes.string,
}

export default PhotoLabel
