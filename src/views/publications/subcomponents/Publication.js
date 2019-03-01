import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import Paragraph from '../../../components/Paragraph'

const StyledPublication = styled.div``

const Context = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 100%;
`

const Download = styled.div``

const DownloadItem = styled.a``

const Publication = ({
  publication: { title, heroImage, epub, mobi, pdf, lead, authors },
}) => (
  <StyledPublication>
    <BoxWithPhoto image={heroImage}>
      <Context>
        {title && <Header>{title}</Header>}
        {authors ? <Link>{authors[0].name}</Link> : 'Журнал'}
        {lead && <Paragraph>{lead}</Paragraph>}
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

export default Publication
