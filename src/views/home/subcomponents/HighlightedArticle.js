import React from 'react'
import styled from 'styled-components'

import ImgWrapper from '../../../components/ImgWrapper'
import { articleType } from '../../../types/article'

const HighlightedArticleStyled = styled.div`
  width: 80%;
  padding: 24px;
  border: 1px solid black;
  margin: auto;
`

const HighlightedArticle = ({
  post: { title, slug, description, heroImage },
}) => {
  return (
    <HighlightedArticleStyled>
      <ImgWrapper img={heroImage} />
      <h2>{title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />
      <button>{slug}</button>
    </HighlightedArticleStyled>
  )
}

HighlightedArticle.propTypes = {
  post: articleType,
}

export default HighlightedArticle
