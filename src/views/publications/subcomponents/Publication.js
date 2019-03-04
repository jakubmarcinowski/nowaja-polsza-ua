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

  ${({ hasFullDescription, theme }) =>
    !hasFullDescription &&
    `
    max-height: 94px;
    position: relative;
    overflow: hidden;

    @media ${mediaQueries.tablet} {
      max-height: 128px;
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 3rem;
      background: ${theme.gradients.publication};
    }
  `}
`
const ReadMore = styled.a`
  position: relative;
  ${({ hasFullDescription }) => !hasFullDescription && 'opacity: 0.7;'}
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
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
          {epub && <DownloadButton url={mobi.file.url} text="MOBI" />}
        </DownloadButtons>
        {lead && (
          <ParagraphsWrapper hasFullDescription={hasFullDescription}>
            <div
              dangerouslySetInnerHTML={{
                __html: lead.childMarkdownRemark.html,
              }}
            />
          </ParagraphsWrapper>
        )}
        <ReadMore
          hasFullDescription={hasFullDescription}
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
