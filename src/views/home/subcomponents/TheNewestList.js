import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../../../utils/mediaQueries'

import { articleType } from '../../../types/article'
import TheNewestItem from './TheNewestItem'

const StyledList = styled.ul`
  display: flex;

  @media ${mediaQueries.large} {
    flex-direction: column;
  }
`

const ListItem = styled.li`
  &:not(:last-child) {
    flex: 0 0 calc(50% - 2.5rem);
    margin: 0 2.5rem 0 0;
  }

  @media ${mediaQueries.large} {
    flex: 0 0 1;

    &:not(:last-child) {
      margin: 0 0 2.5rem;
    }
  }
`

const TheNewestList = ({ posts }) => (
  <StyledList>
    {posts &&
      posts.map(({ node }) => (
        <ListItem key={node.slug}>
          <TheNewestItem article={node} key={node.slug} />
        </ListItem>
      ))}
  </StyledList>
)

TheNewestList.propTypes = {
  posts: PropTypes.arrayOf(articleType).isRequired,
}

export default TheNewestList
