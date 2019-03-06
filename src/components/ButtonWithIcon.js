import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from './Button'

const StyledButtonWithIcon = styled(Button)`
  background: ${({ theme }) => theme.colors.listItemBackground};
  padding: 1rem 1.5rem;
`
const Item = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  transition: filter ${props => props.theme.animations.default};
  margin-right: ${({ gap }) => gap};

  ${StyledButtonWithIcon}:hover & {
    filter: invert(1);
  }
`

const ButtonWithIcon = ({ icon, text, gap }) => (
  <StyledButtonWithIcon>
    <Item>
      <Icon src={icon} gap={gap} />
      {text}
    </Item>
  </StyledButtonWithIcon>
)

ButtonWithIcon.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  gap: PropTypes.string,
}

export default ButtonWithIcon
