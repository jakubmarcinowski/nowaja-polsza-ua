import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { articleType } from '../types/article'
import ImgWrapper from './ImgWrapper'
import Paragraph from './Paragraph'
import ArticleInfoBox from './ArticleInfoBox'
import Header from './Header'
import PhotoLabel from '../components/PhotoLabel'

const ImgBox = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`

const ArticleItem = ({
  article: { title, slug, authors, categories, heroImage, publishDate, lead },
  noCategoryLabel,
}) => (
  <>
    <ImgBox>
      <Link to={`/blog/${slug}`}>
        <ImgWrapper img={heroImage} aspectRatio={1.76} />
      </Link>
      {!noCategoryLabel && categories && (
        <Link to={`/category/${categories[0].slug}`}>
          <PhotoLabel color={categories[0].color}>
            {categories[0].title}
          </PhotoLabel>
        </Link>
      )}
    </ImgBox>
    <ArticleInfoBox author={authors[0]} publishDate={publishDate} />
    {slug && (
      <>
        {slug && (
          <Header
            weight="Bold"
            type={2}
            size="Big"
            color="Dark"
            margin="0 0 1.4rem"
            lineHeight="Medium"
            overflow="hidden"
            height="6.2"
          >
            <Link to={`/blog/${slug}`}>{title}</Link>
          </Header>
        )}
        {lead && (
          <Link to={`/blog/${slug}`}>
            <Paragraph size="Big" lineHeight="Medium" weight="Light">
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
  noCategoryLabel: PropTypes.bool,
}

export default ArticleItem
