import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import Paragraph from '../../../components/Paragraph'
import Button from '../../../components/Button'
import DownloadButton from './DownloadButton'

// @todo Add styles
const StyledPublication = styled.div``
const Context = styled.div``
const DownloadButtons = styled.div`
  display: flex;
  width: 360px;
  justify-content: space-between;
`
const AuthorLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
`

const Publication = ({
  publication: { title, heroImage, epub, mobi, pdf, lead, authors },
}) => (
  <StyledPublication>
    <BoxWithPhoto image={heroImage}>
      <Context>
        {title && (
          <Header size="Big" margin="0 0 1rem" color="Black" weight="Bold">
            {title}
          </Header>
        )}
        {authors
          ? authors.map(({ name, slug }, i, authors) => (
              <AuthorLink to={`/author/${slug}`} key={i}>
                {name}
                {!!authors[i + 1] && <>,&nbsp;</>}
              </AuthorLink>
            ))
          : 'Журнал'}
        <DownloadButtons>
          {pdf && <DownloadButton url={pdf.file.url} text="PDF" />}
          {epub && <DownloadButton url={epub.file.url} text="EPUB" />}
          {epub && <DownloadButton url={mobi.file.url} text="MOBI" />}
        </DownloadButtons>
        {lead && (
          <Paragraph margin="2rem 0" lineHeight="Medium" color="Black">
            {lead}
          </Paragraph>
        )}
        <Button>Загрузить еще</Button>
      </Context>
    </BoxWithPhoto>
  </StyledPublication>
)

Publication.propTypes = {
  publication: PropTypes.any,
}

export default Publication
