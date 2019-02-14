import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArticleItem from '../components/ArticleItem'
import { articleType } from '../types/article'

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 0 0 50%;
    padding: 24px;
  }
`

class ArticlesList extends React.Component {
  state = {
    postsNumber: this.props.initialLimit,
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search)
    const postsLimit = parseInt(urlParams.get('postsLimit'))
    const { fixedNumber } = this.props

    !fixedNumber && postsLimit && this.setState({ postsNumber: postsLimit })
  }

  increasePostsNumber = () => {
    const { postsNumber } = this.state
    const { limit } = this.props

    this.setState({ postsNumber: postsNumber + limit }, () => {
      window.history.pushState('', '', `?postsLimit=${this.state.postsNumber}`)
    })
  }

  render() {
    const { posts, fixedNumber } = this.props
    const { postsNumber } = this.state
    const slicedPosts = posts.slice(0, postsNumber)

    return (
      <>
        <StyledList>
          {posts &&
            slicedPosts.map(({ node }) => (
              <li key={node.slug}>
                <ArticleItem article={node} />
              </li>
            ))}
        </StyledList>

        {!fixedNumber && postsNumber < posts.length && (
          <button onClick={this.increasePostsNumber}>LOAD MORE</button>
        )}
      </>
    )
  }
}

ArticlesList.propTypes = {
  posts: PropTypes.arrayOf(articleType),
  limit: PropTypes.number,
  initialLimit: PropTypes.number,
  fixedNumber: PropTypes.bool,
}

export default ArticlesList
