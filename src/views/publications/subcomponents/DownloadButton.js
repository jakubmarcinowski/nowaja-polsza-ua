import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ExternalLink from '../../../components/ExternalLink'
import Button from '../../../components/Button'
import DownloadIcon from '../../../../static/icon-download-button.svg'

const StyledDownloadButton = styled(Button)`
  padding: 1rem 1.5rem;
`
const Item = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  transition: filter ${props => props.theme.animations.default};
  margin-right: 5px;

  ${StyledDownloadButton}:hover & {
    filter: invert(1);
  }
`

const DownloadButton = ({ url, text }) => (
  <ExternalLink url={url} download>
    <StyledDownloadButton>
      <Item>
        <Icon src={DownloadIcon} />
        {text}
      </Item>
    </StyledDownloadButton>
  </ExternalLink>
)

DownloadButton.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
}

export default DownloadButton
