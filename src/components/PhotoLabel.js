import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { childrenType } from '../types/children'
import { mediaQueries } from '../utils/mediaQueries'
import Label from './Label'

const PhotoLabelStyled = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  left: -5px;
`

const PhotoLabelHighlightedStyled = styled.div`
 position: absolute;
 z-index: 1;
 bottom: 2rem;
 left: 50%;
 transform: translateX(-50%);
  
  @media ${mediaQueries.desktop} {
  top: 10px;
  left: -5px;
  transform: none;
  }
`

const PhotoLabel = ({ color, children, isHighlighted }) => (
  isHighlighted ?
      <PhotoLabelHighlightedStyled>
        <Label color={color}>{children}</Label>
      </PhotoLabelHighlightedStyled>
      :
      <PhotoLabelStyled>
        <Label color={color}>{children}</Label>
      </PhotoLabelStyled>
)

PhotoLabel.propTypes = {
  children: childrenType.isRequired,
  color: PropTypes.string,
  isHighlighted: PropTypes.bool,
}

export default PhotoLabel
