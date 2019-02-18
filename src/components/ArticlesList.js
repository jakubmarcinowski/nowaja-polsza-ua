import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArticleItem from '../components/ArticleItem'
import { articleType } from '../types/article'
import Button from '../components/Button'

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 0 0 calc(100% / 3);
    padding: 3.5rem;
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
          <Button onBtnClick={this.increasePostsNumber} size="large">
            Load more
          </Button>
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
