import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Publication from './subcomponents/Publication'
import ArchivePublication from './subcomponents/ArchivePublication'
import Wrapper from 'components/Wrapper'
import Header from 'components/Header'
import Placeholder from 'components/Placeholder'
import PageHeading from 'components/PageHeading'
import { trans } from 'utils/translate'
import articlesArchive from './archive'

const findCover = (covers, { issue, year }) =>
  covers.find(cover => cover.relativePath.startsWith(`${year}/${issue}.`))

// @todo crete styled component for page header which is center and has a line
const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -1rem;
  text-transform: uppercase;
  flex-wrap: wrap;
  line-height: 1.4;
`

const Filter = styled(Header)`
  margin: 0 1rem;
  cursor: pointer;
  opacity: 0.9;

  ${({ isActive, theme }) =>
    isActive &&
    `border-bottom: 2px solid ${theme.colors.primary} 
    opacity: 1;`}
`

const DateFilter = styled(Header)`
  margin: 0 1rem;
  cursor: pointer;
  opacity: 0.9;

  ${({ isActive, theme }) =>
    isActive &&
    `border-bottom: 2px solid ${theme.colors.primary} 
    opacity: 1;`}
`

const DateFilters = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  flex-wrap: wrap;
  max-width: 70rem;
  margin: 2rem auto 0;
  line-height: 1.4;

  ${({ isActive }) => isActive && `display: flex;`}
`

class PublicationPage extends React.Component {
  constructor(props) {
    super(props)

    const { publications } = this.props
    const journals = publications.filter(
      ({ node: { typeOfPublications } }) => typeOfPublications === 'журналы'
    )
    const areJournals = journals.length > 0

    this.state = {
      filter: !areJournals ? 'книги' : null,
      dateFilter: 1999,
      areJournals: areJournals,
    }
  }

  renderArchiveArticles = () => {
    const { dateFilter } = this.state
    const { covers } = this.props
    const articlesInYear = articlesArchive[dateFilter]

    return articlesInYear.map(({ issue, title, toc }) => (
      <ArchivePublication
        key={`${issue}/${dateFilter}`}
        year={dateFilter}
        issue={issue}
        url={`/pdf/${dateFilter}/${issue}/`}
        title={title}
        toc={toc}
        cover={findCover(covers, { issue, year: dateFilter })}
      />
    ))
  }

  renderPublications = () => {
    const { publications } = this.props
    const { filter } = this.state

    return publications.map(
      ({ node, node: { slug, typeOfPublications } }) =>
        (!filter || typeOfPublications === filter) && (
          <Publication publication={node} key={slug} />
        )
    )
  }

  renderFilters = () => {
    const { filter, areJournals } = this.state
    const filters = areJournals
      ? [null, 'книги', 'журналы', 'архив']
      : ['книги', 'архив']

    return filters.map(filterName => (
      <Filter
        key={filterName}
        size="MediumBig"
        color="Primary"
        weight="Bold"
        onClick={() => this.setState({ filter: filterName })}
        isActive={filter === filterName}
      >
        {filterName || 'все публикации'}
      </Filter>
    ))
  }

  renderDates = () => {
    const { dateFilter } = this.state

    const startYear = 1999
    const endYear = 2018
    const years = []
    for (let i = startYear; i <= endYear; i++) {
      years.push(i)
    }

    return years.map(year => (
      <DateFilter
        key={year}
        size="MediumBig"
        color="Primary"
        weight="Bold"
        onClick={() => this.setState({ dateFilter: year })}
        isActive={dateFilter === year}
      >
        {year}
      </DateFilter>
    ))
  }

  renderPublicationsOrPlaceholder = () => {
    const { publications } = this.props
    const { filter } = this.state

    const filteredPublications = publications.filter(
      ({ node: { typeOfPublications } }) => typeOfPublications === filter
    )

    {
      return publications && (!filter || filteredPublications.length !== 0) ? (
        this.renderPublications()
      ) : (
        <Placeholder>Нет публикации</Placeholder>
      )
    }
  }

  render() {
    const { publications } = this.props
    const { filter } = this.state

    if (publications && publications.length === 0) {
      return <Placeholder>Нет публикации</Placeholder>
    }

    return (
      <Wrapper size="Medium">
        <PageHeading>{trans('LIBRARY')}</PageHeading>
        <Filters>{this.renderFilters()}</Filters>
        <DateFilters isActive={filter === 'архив'}>
          {this.renderDates()}
        </DateFilters>
        {filter === 'архив'
          ? this.renderArchiveArticles()
          : this.renderPublicationsOrPlaceholder()}
      </Wrapper>
    )
  }
}

PublicationPage.propTypes = {
  covers: PropTypes.arrayOf(
    PropTypes.shape({
      relativePath: PropTypes.string.isRequired,
      fluid: PropTypes.object.isRequired,
    })
  ).isRequired,
  publications: PropTypes.any,
  title: PropTypes.string,
}

export default PublicationPage
