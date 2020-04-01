import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mediaQueries } from '../../../utils/mediaQueries'
import { articleType } from '../../../types/article'
import TheNewestItem from './TheNewestItem'

const ListItem = styled.div`
  height: 100%;
  &:not(:last-child) {
    //flex: 0 0 calc(50% - 2.5rem);
    //margin: 0 2.5rem 0 0;
  }

  @media ${mediaQueries.desktop} {
    //flex: 0 0 auto;

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
