import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../../utils/mediaQueries'
import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import DownloadButton from './DownloadButton'

const DownloadButtons = styled.div`
  display: flex;
  width: 240px;
  justify-content: space-between;

  @media ${mediaQueries.tablet} {
    width: 280px;
  }
`
const AuthorLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2em;
`
const ParagraphsWrapper = styled.div`
  margin: 2em 0;
  line-height: 1.8;
  font-size: 1.4rem;

  @media ${mediaQueries.tablet} {
    line-height: 2;
    font-size: 1.6rem;
  }

  ${({ hasFullDescription }) =>
    !hasFullDescription &&
    `
    max-height: 7.3rem;
    overflow: hidden;

    @media ${mediaQueries.tablet} {
      max-height: 6rem;
    }
  `}
`
const ReadMore = styled.button`
  cursor: pointer;
  border: 0;
  padding-bottom: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyDark};
  background: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.greyDark};

  &:focus {
    outline: none;
  }
`

class Publication extends Component {
  state = {
    hasFullDescription: false,
  }
  render() {
    const {
      title,
      heroImage,
      epub,
      mobi,
      pdf,
      lead,
      authors,
    } = this.props.publication
    const { hasFullDescription } = this.state
    return (
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
          {mobi && <DownloadButton url={mobi.file.url} text="MOBI" />}
        </DownloadButtons>
        {lead && (
          <ParagraphsWrapper
            hasFullDescription={hasFullDescription}
            dangerouslySetInnerHTML={{
              __html: lead.childMarkdownRemark.html,
            }}
          />
        )}
        <ReadMore
          onClick={() =>
            this.setState(({ hasFullDescription }) => ({
              hasFullDescription: !hasFullDescription,
            }))
          }
        >
          {hasFullDescription ? 'Скачать меньше' : 'Загрузить еще'}
        </ReadMore>
      </BoxWithPhoto>
    )
  }
}

Publication.propTypes = {
  publication: PropTypes.any,
}

export default Publication
