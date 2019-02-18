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
      <ImgWrapper img={heroImage} aspectRatio={1.6} />
      <h2>{title}</h2>
      {description && (
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      )}
      <button>{slug}</button>
    </HighlightedArticleStyled>
  )
}

HighlightedArticle.propTypes = {
  post: articleType,
}

export default HighlightedArticle
