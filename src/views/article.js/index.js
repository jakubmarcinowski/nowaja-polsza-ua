import React from 'react'
import styled from 'styled-components'

import ImgWrapper from '../../components/ImgWrapper'
import Wrapper from '../../components/Wrapper'
import { articleType } from '../../types/article'
import ArticleSocialMediaList from './subcomponents/ArticleSocialMediaList'

const StyledHeroImage = styled.div`
  width: 80%;
  margin: auto;
`

const ArticlePage = ({ article: { title, heroImage, publishDate, body } }) => (
  <article>
    <StyledHeroImage>
      <ImgWrapper img={heroImage} />
    </StyledHeroImage>
    <ArticleSocialMediaList />
    <Wrapper>
      <h1 className="section-headline">{title}</h1>
      <p>{publishDate}</p>
      {body && (
        <div
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.html,
          }}
        />
      )}
    </Wrapper>
  </article>
)

ArticlePage.propTypes = {
  article: articleType,
}

export default ArticlePage
