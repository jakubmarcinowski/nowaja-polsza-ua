import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Publication from './subcomponents/Publication'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import { mediaQueries } from '../../utils/mediaQueries'
import Placeholder from '../../components/Placeholder'

// @todo crete styled component for page header which is center and has a line

const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin: 8rem -1rem 0;
  text-transform: uppercase;

  @media ${mediaQueries.tablet} {
    margin: 10rem -1rem 0;
  }

  @media ${mediaQueries.desktop} {
    margin: 5rem -1rem 0;
  }
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

class PublicationPage extends React.Component {
  state = {
    filter: null,
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

  render() {
    const { publications } = this.props
    const { filter } = this.state

    const filteredPublications = publications.filter(
      ({ node: { typeOfPublications } }) => typeOfPublications === filter
    )

    if (publications && publications.length === 0) {
      return <Placeholder>Нет публикации</Placeholder>
    }

    return (
      <Wrapper size="Medium">
        <Filters>
          <Filter
            size="MediumBig"
            color="Primary"
            weight="Bold"
            onClick={() => this.setState({ filter: null })}
            isActive={filter === null}
          >
            все публикации
          </Filter>
          <Filter
            size="MediumBig"
            color="Primary"
            weight="Bold"
            onClick={() => this.setState({ filter: 'книги' })}
            isActive={filter === 'книги'}
          >
            книги
          </Filter>
          <Filter
            size="MediumBig"
            color="Primary"
            weight="Bold"
            onClick={() => this.setState({ filter: 'журналыa' })}
            isActive={filter === 'журналы'}
          >
            журналы
          </Filter>
        </Filters>
        {publications && (!filter || filteredPublications.length !== 0) ? (
          this.renderPublications()
        ) : (
          <Placeholder>Нет публикации</Placeholder>
        )}
      </Wrapper>
    )
  }
}

PublicationPage.propTypes = {
  publications: PropTypes.any,
  title: PropTypes.string,
}

export default PublicationPage
