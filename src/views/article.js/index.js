import React from 'react'
import styled from 'styled-components'

import ImgWrapper from '../../components/ImgWrapper'
import Wrapper from '../../components/Wrapper'
import { articleType } from '../../types/article'
import Header from '../../components/Header'
import Author from '../../components/Author'

const StyledHeroImage = styled.div`
  width: 80%;
  margin: auto;
`

const HeaderStyled = styled(Header)`
  text-align: center;
`

const ArticlePage = ({
  article: { title, heroImage, publishDate, body, authors },
}) => (
  <article>
    <StyledHeroImage>
      <ImgWrapper img={heroImage} />
    </StyledHeroImage>
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
      <HeaderStyled size="Biggest">об авторе</HeaderStyled>
      {/* @TODO change when more than one author will be ready */}
      <Author author={authors[0]} />
    </Wrapper>
  </article>
)

ArticlePage.propTypes = {
  article: articleType,
}

export default ArticlePage
