import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mediaQueries } from '../../../utils/mediaQueries'
import { articleType } from '../../../types/article'
import TheNewestItem from './TheNewestItem'

const ListItem = styled.div`
  height: 100%;
  grid-column: span 2;
  grid-row: span 2;

@media ${mediaQueries.phoneLandscape} {
  grid-column: span 1;
  grid-row: span 1;
}

  @media ${mediaQueries.desktop} {

    &:not(:last-child) {
      //margin: 0 0 2.5rem;
    }
  }
`

const TheNewestList = ({ posts }) => (
  <>
    {posts &&
      posts.map(({ node }) => (
        <ListItem key={node.slug}>
          <TheNewestItem article={node} key={node.slug} />
        </ListItem>
      ))}
      </>
)

TheNewestList.propTypes = {
  posts: PropTypes.arrayOf(articleType).isRequired,
}

export default TheNewestList
