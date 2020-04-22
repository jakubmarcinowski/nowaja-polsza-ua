import React from 'react'
import PropTypes from 'prop-types'

import ExternalLink from 'components/ExternalLink'
import DownloadIcon from 'static/icon-download-button.svg'
import ButtonWithIcon from 'components/ButtonWithIcon'

const DownloadButton = ({ url, text }) => (
  <ExternalLink url={url} download>
    <ButtonWithIcon text={text} icon={DownloadIcon} gap="0.5rem" />
  </ExternalLink>
)

DownloadButton.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
}

export default DownloadButton
