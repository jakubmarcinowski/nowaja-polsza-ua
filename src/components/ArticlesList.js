import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArticleItem from '../components/ArticleItem'
import { articleType } from '../types/article'
import { mediaQueries } from '../utils/mediaQueries'
import Button from '../components/Button'
import EventsContainer from './EventsContainer'
import { highlightedEventType } from '../types/highlightedEvent'

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${({ noMargin }) => !noMargin && 'margin: 2.5rem 0 0;'}
  padding: 0;
  list-style: none;

  @media ${mediaQueries.tablet} {
    ${({ noMargin }) => !noMargin && 'margin: 4rem -2.5rem;'}
  }
`
const ListItem = styled.li`
  flex: 0 0 100%;

  &:not(:last-child) {
    padding: 0 0 4rem;
  }

  @media ${mediaQueries.tablet} {
    flex: 0 0 calc(100% / 2);

    &:not(:last-child) {
      padding: 0 2.5rem;
    }
  }

  @media ${mediaQueries.large} {
    ${({ size }) => size !== 'Big' && 'flex: 0 0 calc(100% / 3);'}
    padding: 0 2.5rem;
  }
`
const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`
class ArticlesList extends React.Component {
  state = {
    postsNumber: this.props.initialLimit,
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search)
    const postsLimit = parseInt(urlParams.get('postsLimit'))
    const { limit } = this.props

    limit && postsLimit && this.setState({ postsNumber: postsLimit })
  }

  increasePostsNumber = () => {
    const { postsNumber } = this.state
    const { limit } = this.props

    this.setState({ postsNumber: postsNumber + limit }, () => {
      window.history.pushState('', '', `?postsLimit=${this.state.postsNumber}`)
    })
  }

  render() {
    const {
      posts,
      limit,
      noCategoryLabel,
      size,
      noMargin,
      highlightedEvents,
    } = this.props
    const { postsNumber } = this.state
    const slicedPosts = postsNumber ? posts.slice(0, postsNumber) : posts
    const eventsContainerPosition = 2
    const postsBeforeEventsContainer = slicedPosts.slice(
      0,
      eventsContainerPosition
    )
    const postsAfterEventsContainer = slicedPosts.slice(eventsContainerPosition)

    return (
      <>
        <StyledList noMargin={noMargin}>
          {postsBeforeEventsContainer &&
            postsBeforeEventsContainer.map(({ node }) => (
              <ListItem key={node.slug} size={size}>
                <ArticleItem
                  article={node}
                  key={node.slug}
                  noCategoryLabel={noCategoryLabel}
                />
              </ListItem>
            ))}
          {highlightedEvents && highlightedEvents.length !== 0 && (
            <ListItem key="eventsContainer" size={size}>
              <EventsContainer events={highlightedEvents} />
            </ListItem>
          )}
          {postsAfterEventsContainer &&
            postsAfterEventsContainer.map(({ node }) => (
              <ListItem key={node.slug} size={size}>
                <ArticleItem
                  article={node}
                  key={node.slug}
                  noCategoryLabel={noCategoryLabel}
                />
              </ListItem>
            ))}
        </StyledList>

        {limit && postsNumber < posts.length && (
          <ButtonWrapper>
            <Button onClick={this.increasePostsNumber} size="large">
              Загрузить еще
            </Button>
          </ButtonWrapper>
        )}
      </>
    )
  }
}

ArticlesList.propTypes = {
  posts: PropTypes.arrayOf(articleType).isRequired,
  highlightedEvents: PropTypes.arrayOf(highlightedEventType),
  limit: PropTypes.number,
  initialLimit: PropTypes.number,
  noCategoryLabel: PropTypes.bool,
  noMargin: PropTypes.bool,
  size: PropTypes.string,
}

export default ArticlesList
