import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { articleType } from '../types/article'
import ImgWrapper from './ImgWrapper'
import Paragraph from './Paragraph'
import ArticleInfoBox from './ArticleInfoBox'
import Header from './Header'

const ImgBox = styled.div`
  position: relative;
  margin-bottom: 3.6rem;
`
const CategoryLink = styled(Link)`
  position: absolute;
  top: 7px;
  left: -3px;
  display: block;
  transition: opacity ${props => props.theme.animations.default};
  background: ${({ theme, color }) => theme.colors.highlighted[color]};
  color: ${props => props.theme.colors.white};
  padding: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
`
const Title = styled.h3`
  transition: opacity ${props => props.theme.animations.default};
  margin: 1rem 0 2rem;
  font-size: 2.6rem;

  &:hover {
    opacity: 0.9;
  }
`

const ArticleItem = ({
  article: { title, slug, author, categories, heroImage, publishDate, lead },
}) => (
  <>
    <ImgBox>
      <Link to={`/blog/${slug}`}>
        <ImgWrapper img={heroImage} aspectRatio={1.76} />
      </Link>
      {categories && (
        <CategoryLink
          color={categories[0].color}
          to={`/category/${categories[0].slug}`}
        >
          {categories[0].title}
        </CategoryLink>
      )}
    </ImgBox>
    <ArticleInfoBox author={author} publishDate={publishDate} />
    {slug && (
      <>
        {slug && (
          <Header
            weight="Bold"
            type={2}
            size="Big"
            color="black"
            margin="0 0 1.4rem"
            lineHeight="Big"
          >
            <Link to={`/blog/${slug}`}>{title}</Link>
          </Header>
        )}
        {lead && (
          <Link to={`/blog/${slug}`}>
            <Paragraph size="Big" lineHeight="Medium">
              {lead}
            </Paragraph>
          </Link>
        )}
      </>
    )}
  </>
)

ArticleItem.propTypes = {
  article: articleType,
}

export default ArticleItem
