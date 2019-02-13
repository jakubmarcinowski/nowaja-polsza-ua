import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ArticleItem from '../components/ArticleItem'

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
        <ul className="article-list">
          {slicedPosts.map(({ node }) => (
            <li key={node.slug}>
              <ArticleItem article={node} />
            </li>
          ))}
        </ul>

        {postsNumber < posts.length && (
          <button onClick={this.increasePostsNumber}>LOAD MORE</button>
        )}
      </>
    )
  }
}

ArticlesList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string,
        }),
      }),
      publishDate: PropTypes.string,
      slug: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
    })
  ),
}

export default ArticlesList
