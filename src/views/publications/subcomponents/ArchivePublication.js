import React, { useState } from 'react'
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

const romanicMonths = {
  '01': 'I',
  '02': 'II',
  '03': 'III',
  '04': 'IV',
  '05': 'V',
  '06': 'VI',
  '07-08': 'VII-VIII',
  '09': 'IX',
  '10': 'X',
  '11': 'XI',
  '12': 'XII',
}

const initVisibleTitles = 2

const ArchivePublication = ({ cover, url, issue, year, title, toc }) => {
  const [isMoreVisible, setIsMoreVisible] = useState(false)
  const heading = title || `Новая Польша ${issue}/${year}`

  return (
    <BoxWithPhoto
      image={cover}
      archive={!cover}
      month={romanicMonths[issue]}
      year={year}
    >
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
      {toc && (
        <Desc color={'Black'} size={'Big'} weight={'Light'} lineHeight={'Big'}>
          {toc.map((tocElement, i) => {
            if (isMoreVisible) {
              return <h2 key={i}>{tocElement}</h2>
            } else {
              if (i < initVisibleTitles) {
                return <h2 key={i}>{tocElement}</h2>
              }
            }
          })}
          {toc.length > initVisibleTitles && (
            <ReadMoreButton onClick={() => setIsMoreVisible(!isMoreVisible)}>
              {isMoreVisible ? trans('SHOW_LESS') : trans('SHOW_MORE')}
            </ReadMoreButton>
          )}
        </Desc>
      )}
    </BoxWithPhoto>
  )
}

ArchivePublication.propTypes = {
  url: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  cover: PropTypes.shape({ fluid: PropTypes.object.isRequired }).isRequired,
  title: PropTypes.string,
  toc: PropTypes.arrayOf(PropTypes.string),
}

export default ArchivePublication
