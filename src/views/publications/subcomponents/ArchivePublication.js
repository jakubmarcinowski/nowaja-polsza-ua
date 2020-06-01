import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaQueries } from 'utils/mediaQueries'
import BoxWithPhoto from 'components/BoxWithPhoto'
import Header from 'components/Header'
import Paragraph from 'components/Paragraph'
import ReadMoreButton from 'components/ReadMoreButton'
import DownloadButton from './DownloadButton'
import articles from './../archive'
import { trans } from 'utils/translate'

const DownloadButtons = styled.div`
  display: flex;
  max-width: 240px;
  justify-content: space-between;

  @media ${mediaQueries.tablet} {
    width: 280px;
    max-width: inherit;
  }
`

const Desc = styled(Paragraph)`
  margin-top: 2em;
`

const ArchivePublication = ({ cover, url, issue, year, title }) => {
  const heading = title || `Новая Польша ${issue}/${year}`

  return (
    <BoxWithPhoto image={cover}>
      <Header
        size="Big"
        margin="0 0 0.8em"
        color="Black"
        weight="Bold"
        type={3}
      >
        {heading}
      </Header>
      <DownloadButtons>
        <DownloadButton url={url} text="PDF" />
      </DownloadButtons>
    </BoxWithPhoto>
  )
}

ArchivePublication.propTypes = {
  url: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  cover: PropTypes.shape({ fluid: PropTypes.object.isRequired }).isRequired,
  title: PropTypes.string,
}

export default ArchivePublication
