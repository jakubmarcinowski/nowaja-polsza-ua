import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { mediaQueries } from 'utils/mediaQueries'

const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  ${({ justify }) => `justify-content: ${justify};`}
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.2rem;
  color: ${({ theme, color }) => theme.colors[color]};
  line-height: 1.5;

  @media ${mediaQueries.phoneLandscape} {
    font-size: 1.4rem;
  }

  @media ${mediaQueries.tablet} {
    font-size: ${({ size }) => (size === 'Small' ? '1.4rem' : '1.6rem')};
  }
`
const AuthorLink = styled(Link)`
  display: inline;
  transition: opacity ${props => props.theme.animations.default};
  margin-bottom: 0.5rem;
  color: ${({ theme, color }) =>
    color ? theme[color] : theme.colors.authorLink};
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }
`

const AuthorsWithoutAccount = styled.span`
  color: ${({ theme }) => theme.colors.authorLink};
  font-weight: 600;
`

const ArticleInfoBox = ({
  authors,
  authorsWithoutAccount,
  size,
  color,
  justify,
}) => (
  <InfoBox size={size} justify={justify} color={color}>
    <div>
      {authors &&
        authors.map(({ name, slug, id }, i, authors) => (
          <AuthorLink color={color} to={`/author/${slug}`} key={id}>
            {name}
            {!!authors[i + 1] && <>,&nbsp;</>}
          </AuthorLink>
        ))}
      {authorsWithoutAccount && (
        <AuthorsWithoutAccount> {authorsWithoutAccount}</AuthorsWithoutAccount>
      )}
    </div>
  </InfoBox>
)

ArticleInfoBox.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
  }),
  authorsWithoutAccount: PropTypes.string,
  publishDate: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  justify: PropTypes.string,
  dateLink: PropTypes.string,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
}

export default ArticleInfoBox
