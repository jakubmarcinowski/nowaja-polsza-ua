import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArticleItem from '../components/ArticleItem'
import { articleType } from '../types/article'
import { mediaQueries } from '../utils/mediaQueries'

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    flex: 0 0 100%;
    padding-bottom: 9.5rem;

    @media ${mediaQueries.tablet} {
      flex: 0 0 calc(89% / 2);
    }

    @media ${mediaQueries.large} {
      flex: 0 0 calc(89% / 3);
    }
  }
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
    const { posts, limit } = this.props
    const { postsNumber } = this.state
    const slicedPosts = postsNumber ? posts.slice(0, postsNumber) : posts

    return (
      <>
        <StyledList>
          {posts &&
            slicedPosts.map(({ node }) => (
              <li key={node.slug}>
                <ArticleItem article={node} key={node.slug} />
              </li>
            ))}
        </StyledList>

        {limit && postsNumber < posts.length && (
          <button onClick={this.increasePostsNumber}>LOAD MORE</button>
        )}
      </>
    )
  }
}

ArticlesList.propTypes = {
  posts: PropTypes.arrayOf(articleType).isRequired,
  limit: PropTypes.number,
  initialLimit: PropTypes.number,
}

export default ArticlesList
