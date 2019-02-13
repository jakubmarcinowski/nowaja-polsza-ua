import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import ArticleItem from '../components/ArticleItem'
import { articleType } from '../types/article'

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-gap: 5vmin;
`

class ArticlesList extends React.Component {
  state = {
    postsNumber: this.props.limit,
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search)
    const postsLimit = parseInt(urlParams.get('postsLimit'))
    const { postsNumber } = this.state

    postsLimit && this.setState({ postsNumber: postsLimit })
  }

  increasePostsNumber = () => {
    const { postsNumber } = this.state
    const { limit } = this.props

    this.setState({ postsNumber: postsNumber + limit }, () => {
      window.history.pushState('', '', `?postsLimit=${this.state.postsNumber}`)
    })
  }

  render() {
    const { posts, location } = this.props
    const { postsNumber } = this.state
    const slicedPosts = posts.slice(0, postsNumber)

    return (
      <>
        <StyledList>
          <ul className="article-list">
            {posts &&
              slicedPosts.map(({ node }) => (
                <li key={node.slug}>
                  <ArticleItem article={node} />
                </li>
              ))}
          </ul>
        </StyledList>

        {postsNumber < posts.length && (
          <button onClick={this.increasePostsNumber}>LOAD MORE</button>
        )}
      </>
    )
  }
}

ArticlesList.propTypes = {
  posts: PropTypes.arrayOf(articleType),
}

export default ArticlesList
