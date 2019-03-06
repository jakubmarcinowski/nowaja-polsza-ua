import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../../utils/mediaQueries'
import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import DownloadButton from './DownloadButton'
import ReadMoreButton from '../../../components/ReadMoreButton'

const DownloadButtons = styled.div`
  display: flex;
  width: 240px;
  justify-content: space-between;

  @media ${mediaQueries.tablet} {
    width: 280px;
  }
`
const AuthorWrapper = styled.div`
  margin-bottom: 2em;
`
const AuthorLink = styled(Link)`
  display: inline-block;
`
const ParagraphsWrapper = styled.div`
  margin: 2em 0;
  max-width: 83rem;
  line-height: 1.8;
  font-weight: 300;
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

class Publication extends Component {
  state = {
    hasFullDescription: false,
  }
  toggleDescription = () => {
    this.setState(({ hasFullDescription }) => ({
      hasFullDescription: !hasFullDescription,
    }))
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
        <AuthorWrapper>
          {authors
            ? authors.map(({ name, slug }, i, authors) => (
                <AuthorLink to={`/author/${slug}`} key={i}>
                  {name}
                  {!!authors[i + 1] && <>,&nbsp;</>}
                </AuthorLink>
              ))
            : 'Журнал'}
        </AuthorWrapper>
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
        <ReadMoreButton onClick={this.toggleDescription}>
          {hasFullDescription ? 'Показывай меньше' : 'Показать больше'}
        </ReadMoreButton>
      </BoxWithPhoto>
    )
  }
}

Publication.propTypes = {
  publication: PropTypes.any,
}

export default Publication
