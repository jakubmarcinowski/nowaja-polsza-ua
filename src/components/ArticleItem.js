import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { articleType } from '../types/article'
import ImgWrapper from './ImgWrapper'

const ImgBox = styled.div`
  position: relative;
  margin-bottom: 3.6rem;
`
const CategoryLink = styled(Link)`
  position: absolute;
  top: 7px;
  left: -3px;
  display: block;
  transition: opacity 0.3s ease;
  background: ${props => props.theme.rouge};
  color: ${props => props.theme.white};
  padding: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
`
const Date = styled.div`
  margin: 0 2.4rem 0.5rem 0;
  color: ${props => props.theme.darkGreyBlue};
`
const InfoBox = styled.div`
  flex-wrap: wrap;
  align-items: center;
  display: flex;
`
const AuthorLink = styled(Link)`
  display: block;
  transition: opacity 0.3s ease;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.plum};
  font-weight: bold;

  a {
    &:hover {
      opacity: 0.9;
    }
  }
`
const Title = styled.h3`
  transition: opacity 0.3s ease;
  margin: 1rem 0;
  font-size: 2.6rem;

  &:hover {
    opacity: 0.9;
  }
`

const ArticleItem = ({
  article: { title, slug, author, categories, heroImage, publishDate },
}) => (
  <>
    <ImgBox>
      <Link to={`/blog/${slug}`}>
        <ImgWrapper img={heroImage} />
      </Link>
      {categories && (
        <CategoryLink to={`/category/${categories[0].slug}`}>
          {categories[0].title}
        </CategoryLink>
      )}
    </ImgBox>
    <InfoBox>
      {publishDate && <Date>{publishDate}</Date>}
      {author && (
        <AuthorLink to={`/author/${author.slug}`}>{author.name}</AuthorLink>
      )}
    </InfoBox>
    {slug && (
      <Title>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </Title>
    )}
  </>
)

ArticleItem.propTypes = {
  article: articleType,
}

export default ArticleItem
