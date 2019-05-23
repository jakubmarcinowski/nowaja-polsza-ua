import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../../utils/mediaQueries'
import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import Paragraph from '../../../components/Paragraph'
import DownloadButton from './DownloadButton'

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

const ArchivePublication = ({ month, year }) => {
  const twoDigitsMonth = ('0' + month).slice(-2)
  const convertToRoman = num => {
    const decimalValue = [10, 9, 5, 4, 1]
    const romanNumeral = ['X', 'IX', 'V', 'IV', 'I']

    let romanized = ''
    for (let i = 0; i < decimalValue.length; i++) {
      while (decimalValue[i] <= num) {
        romanized += romanNumeral[i]
        num -= decimalValue[i]
      }
    }
    return romanized
  }

  const romanizedMonth = convertToRoman(month)

  return (
    <BoxWithPhoto archive={true} month={romanizedMonth} year={year}>
      <Header
        size="Big"
        margin="0 0 0.8em"
        color="Black"
        weight="Bold"
        type={3}
      >
        Nowaja Polsza {twoDigitsMonth}/{year}
      </Header>
      <DownloadButtons>
        {
          <DownloadButton
            url={`/pdf/${year}/${twoDigitsMonth}.pdf`}
            text="PDF"
          />
        }
      </DownloadButtons>
      <Desc color={'Black'} size={'Big'} weight={'Light'} lineHeight={'Big'}>
        LIST OF ARTICLES IN THIS NOWAJA POLSZA EDITION
      </Desc>
    </BoxWithPhoto>
  )
}

ArchivePublication.propTypes = {
  month: PropTypes.any,
  year: PropTypes.any,
}

export default ArchivePublication
