import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { mediaQueries } from '../utils/mediaQueries'

const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${({ justify }) => `justify-content: ${justify};`}
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.4rem;
  color: ${({ theme, color }) => theme.colors[color]};

  @media ${mediaQueries.tablet} {
    font-size: ${({ size }) => (size === 'Small' ? '1.4rem' : '1.6rem')};
  }
`
const Date = styled.div`
  margin: 0 2.4rem 0.5rem 0;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.highlighted.darkGreyBlue};
`
const AuthorLink = styled(Link)`
  display: block;
  transition: opacity ${props => props.theme.animations.default};
  margin-bottom: 0.5rem;
  color: ${({ theme, color }) =>
    color ? theme[color] : theme.colors.highlighted.plum};
  font-weight: 700;

  &:hover {
    opacity: 0.9;
  }
`

const ArticleInfoBox = ({ author, publishDate, size, color, justify }) => (
  <InfoBox size={size} justify={justify} color={color}>
    {publishDate && <Date color={color}>{publishDate}</Date>}
    {author && (
      <AuthorLink color={color} to={`/author/${author.slug}`}>
        {author.name}
      </AuthorLink>
    )}
  </InfoBox>
)

ArticleInfoBox.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
  }),
  publishDate: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  justify: PropTypes.string,
}

export default ArticleInfoBox
