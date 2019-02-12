import React from 'react'
import styled from 'styled-components'

import ArticleItem from '../../../components/ArticleItem'
import { articleType } from '../../../types/article'

const HighlightedArticleStyled = styled.div`
  width: 80%;
  padding: 24px;
  border: 1px solid black;
  margin: auto;
`

const HighlightedArticle = ({ post }) => (
  <HighlightedArticleStyled>
    <ArticleItem article={post} />
  </HighlightedArticleStyled>
)

HighlightedArticle.propTypes = {
  post: articleType,
}

export default HighlightedArticle
