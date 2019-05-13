import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../../utils/mediaQueries'
import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import DownloadButton from './DownloadButton'
import ReadMoreWrapper from '../../../components/ReadMoreWrapper'

const DownloadButtons = styled.div`
  display: flex;
  max-width: 240px;
  justify-content: space-between;

  @media ${mediaQueries.tablet} {
    width: 280px;
    max-width: inherit;
  }
`
const AuthorWrapper = styled.div`
  margin-bottom: 2em;
`
const AuthorLink = styled(Link)`
  display: inline-block;
`

const Publication = ({
  publication: { title, heroImage, epub, mobi, pdf, lead, authors, subtitle },
}) => (
  <BoxWithPhoto image={heroImage}>
    {title && (
      <Header
        size="Big"
        margin="0 0 0.8em"
        color="Black"
        weight="Bold"
        type={3}
      >
        {title}
      </Header>
    )}
    <AuthorWrapper>
      {subtitle
        ? subtitle
        : authors &&
          authors.map(({ name, slug }, i, authors) => (
            <AuthorLink to={`/author/${slug}`} key={i}>
              {name}
              {!!authors[i + 1] && <>,&nbsp;</>}
            </AuthorLink>
          ))}
    </AuthorWrapper>
    <DownloadButtons>
      {pdf && <DownloadButton url={pdf.file.url} text="PDF" />}
      {epub && <DownloadButton url={epub.file.url} text="EPUB" />}
      {mobi && <DownloadButton url={mobi.file.url} text="MOBI" />}
    </DownloadButtons>
    <ReadMoreWrapper description={lead} />
  </BoxWithPhoto>
)

Publication.propTypes = {
  publication: PropTypes.any,
}

export default Publication
