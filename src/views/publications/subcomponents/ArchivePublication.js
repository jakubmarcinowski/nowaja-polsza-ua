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

const ArchivePublication = () => (
  <BoxWithPhoto archive={true}>
    <Header size="Big" margin="0 0 0.8em" color="Black" weight="Bold" type={3}>
      Nowaja Polsza month/year
    </Header>
    <DownloadButtons>
      {<DownloadButton url={`/pdf/sample.pdf`} text="PDF" />}
    </DownloadButtons>
    {/* <ReadMoreWrapper description={lead} /> */}
    <Desc color={'Black'} size={'Big'} weight={'Light'} lineHeight={'Big'}>
      ARTICLES LIST KURWA JEBANA DUPA DUAP DUAPDUP ACHUJ ARTICLES LIST KURWA
      JEBANA DUPA DUAP DUAPDUP ACHUJARTICLES LIST KURWA JEBANA DUPA DUAP DUAPDUP
      ACHUJARTICLES LIST KURWA JEBANA DUPA DUAP DUAPDUP ACHUJ
    </Desc>
  </BoxWithPhoto>
)

ArchivePublication.propTypes = {
  publication: PropTypes.any,
}

export default ArchivePublication
