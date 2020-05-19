import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from 'components/Button'

const StyledButtonWithIcon = styled(Button)`
  background: transparent;
`
const Item = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  transition: filter ${props => props.theme.animations.default};
  margin-right: ${({ gap }) => gap};
  max-width: ${props => (props.big ? 'unset' : '1.2rem')};

  ${StyledButtonWithIcon}:hover & {
    filter: invert(1);
  }
`

const ButtonWithIcon = ({ icon, text, gap, size, iconBig }) => (
  <StyledButtonWithIcon size={size}>
    <Item>
      <Icon src={icon} gap={gap} alt="icon" big={iconBig} />
      {text}
    </Item>
  </StyledButtonWithIcon>
)

ButtonWithIcon.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  gap: PropTypes.string,
  iconBig: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(Button.sizes)),
}

export default ButtonWithIcon
