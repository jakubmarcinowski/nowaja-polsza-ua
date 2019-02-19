import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArticleItem from '../components/ArticleItem'
import { articleType } from '../types/article'
import { mediaQueries } from '../utils/mediaQueries'
import Button from '../components/Button'

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    flex: 0 0 100%;
    padding-bottom: 9.5rem;

    @media ${mediaQueries.tablet} {
      flex: 0 0 calc(95% / 2);
    }

    @media ${mediaQueries.large} {
      flex: 0 0 calc(89% / 3);
    }
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
          <ButtonWrapper>
            <Button onBtnClick={this.increasePostsNumber} size="large">
              Load more
            </Button>
          </ButtonWrapper>
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
