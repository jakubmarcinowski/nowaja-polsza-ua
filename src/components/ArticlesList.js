import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'url-search-params-polyfill'

import ArticleItem from 'components/ArticleItem'
import { articleType } from 'types/article'
import { mediaQueries } from 'utils/mediaQueries'
import Button from 'components/Button'
import { trans } from 'utils/translate'
import { Link } from 'gatsby'

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 2.5rem 0 0;
  list-style: none;

  @media ${mediaQueries.tablet} {
    margin: 5rem -1.25rem 4rem;
  }

  @media ${mediaQueries.desktop} {
    margin: 5rem -2.5rem 4rem;
  }

  @media print {
    page-break-before: auto;
    page-break-after: auto;
    page-break-inside: avoid;
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

    ${({ isOnHomepage }) =>
      isOnHomepage &&
      `&:nth-child(-n + 4) {
    display: none;
  }`}
  }

  @media ${mediaQueries.large} {
    ${({ size }) => size !== 'Big' && 'flex: 0 0 calc(100% / 3);'}
    padding: 0 2.5rem 9.5rem;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;

  @media ${mediaQueries.phoneLandscape} {
    flex-direction: row;
  }

  & > *:not(:first-child) {
    margin: 0 0 2rem;

    @media ${mediaQueries.phoneLandscape} {
      margin: 0 0 0 4rem;
    }
  }
`

const getListItemId = (index, isOnHomepage) => {
  if (isOnHomepage) {
    // first four posts on home page are highlighted posts which are on every page
    return index === 4 ? 'page-start' : null
  }
  return index === 0 ? 'page-start' : null
}

class ArticlesList extends React.Component {
  render() {
    const {
      posts,
      noCategoryLabel,
      size,
      noMargin,
      isOnHomepage,
      prevPagePath,
      nextPagePath,
    } = this.props

    return (
      <>
        <StyledList noMargin={noMargin}>
          {posts &&
            posts.map(({ node }, i) => (
              <ListItem key={node.slug} size={size} isOnHomepage={isOnHomepage}>
                <ArticleItem
                  article={node}
                  key={node.slug}
                  noCategoryLabel={noCategoryLabel}
                  id={getListItemId(i, isOnHomepage)}
                />
              </ListItem>
            ))}
        </StyledList>

        {(prevPagePath || nextPagePath) && (
          <ButtonWrapper>
            {prevPagePath && (
              <Link to={`${prevPagePath}#page-start`}>
                <Button onClick={this.increasePostsNumber} size="large">
                  {trans('LOAD_PREVIOUS')}
                </Button>
              </Link>
            )}
            {nextPagePath && (
              <Link
                to={`${nextPagePath}#page-start`}
                state={{ pageChanged: true }}
              >
                <Button onClick={this.increasePostsNumber} size="large">
                  {trans('LOAD_MORE')}
                </Button>
              </Link>
            )}
          </ButtonWrapper>
        )}
      </>
    )
  }
}

ArticlesList.propTypes = {
  posts: PropTypes.arrayOf(articleType).isRequired,
  noCategoryLabel: PropTypes.bool,
  noMargin: PropTypes.bool,
  size: PropTypes.string,
  isOnHomepage: PropTypes.bool,
  prevPagePath: PropTypes.string,
  nextPagePath: PropTypes.string,
}

export default ArticlesList
