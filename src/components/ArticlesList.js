import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'url-search-params-polyfill';

import ArticleItem from '../components/ArticleItem'
import { articleType } from '../types/article'
import { mediaQueries } from '../utils/mediaQueries'
import Button from '../components/Button'
import { highlightedEventType } from '../types/highlightedEvent'

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 2.5rem 0 0;
  padding: 0;
  list-style: none;

  @media ${mediaQueries.tablet} {
    margin: 5rem -1.25rem 4rem;
  }

  @media ${mediaQueries.desktop} {
    margin: 5rem -2.5rem 4rem;
  }
`
const ListItem = styled.li`
  flex: 0 0 100%;
  padding-bottom: 4rem;

  @media ${mediaQueries.tablet} {
    flex: 0 0 calc(100% / 2);
    padding: 0 1.25rem 6.5rem;
  }

  @media ${mediaQueries.desktop} {
    padding: 0 2.5rem 6.5rem;
  }

  @media ${mediaQueries.large} {
    ${({ size }) => size !== 'Big' && 'flex: 0 0 calc(100% / 3);'}
    padding: 0 2.5rem 9.5rem;

    ${({ isOnHomepage }) =>
      isOnHomepage &&
      `&:nth-child(-n + 2) {
      display: none;
    }`}
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
      isOnHomepage,
    } = this.props
    const { postsNumber } = this.state
    const slicedPosts = postsNumber ? posts.slice(0, postsNumber) : posts
    const eventsContainerPosition = 3
    const postsBeforeEventsContainer = slicedPosts.slice(
      0,
      eventsContainerPosition + 1
    )
    const postsAfterEventsContainer = slicedPosts.slice(
      eventsContainerPosition + 1
    )

    return (
      <>
        <StyledList noMargin={noMargin}>
          {postsBeforeEventsContainer &&
            postsBeforeEventsContainer.map(({ node }) => (
              <ListItem key={node.slug} size={size} isOnHomepage={isOnHomepage}>
                <ArticleItem
                  article={node}
                  key={node.slug}
                  noCategoryLabel={noCategoryLabel}
                />
              </ListItem>
            ))}
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
  isOnHomepage: PropTypes.bool,
}

export default ArticlesList
