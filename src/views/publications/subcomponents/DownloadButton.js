import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ExternalLink from '../../../components/ExternalLink'
import Button from '../../../components/Button'
import DownloadIcon from '../../../../static/download-button.svg'

const StyledDownloadButton = styled(Button)`
  padding: 1rem 1.5rem;
  &:hover img {
    filter: invert(1);
  }
`
const Item = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  transition: filter ${props => props.theme.animations.default};
  margin-right: 5px;
`

const DownloadButton = ({ url, text }) => {
  return (
    <ExternalLink url={url} download>
      <StyledDownloadButton>
        <Item>
          <Icon src={DownloadIcon} />
          <span>{text}</span>
        </Item>
      </StyledDownloadButton>
    </ExternalLink>
  )
}

DownloadButton.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
}

export default DownloadButton
