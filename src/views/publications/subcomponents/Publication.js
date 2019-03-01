import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import Paragraph from '../../../components/Paragraph'

// @todo Add styles
const StyledPublication = styled.div``
const Context = styled.div``
const Download = styled.div``
const DownloadItem = styled.a``

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
              <Link to={`/author/${slug}`} key={i}>
                {name}
                {!!authors[i + 1] && <>,&nbsp;</>}
              </Link>
            ))
          : 'Журнал'}

        {lead && (
          <Paragraph margin="2rem 0" lineHeight="Medium" color="Black">
            {lead}
          </Paragraph>
        )}
        {/* @todo add icons */}
        <Download>
          {pdf && (
            <DownloadItem href={pdf.file.url} download target="_blank">
              PDF{' '}
            </DownloadItem>
          )}
          {epub && (
            <DownloadItem href={mobi.file.url} download target="_blank">
              EPUB{' '}
            </DownloadItem>
          )}
          {mobi && (
            <DownloadItem href={mobi.file.url} download target="_blank">
              MOBI
            </DownloadItem>
          )}
        </Download>
      </Context>
    </BoxWithPhoto>
  </StyledPublication>
)

Publication.propTypes = {
  publication: PropTypes.any,
}

export default Publication
