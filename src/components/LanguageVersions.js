import React from 'react'
import styled from 'styled-components'
const meta = require('./../../meta')

import ExternalLink from 'components/ExternalLink'

const versions = [
  {
    shortcut: 'РУС',
    url: meta.ru.siteUrl,
  },
  {
    shortcut: 'УКР',
    url: meta.ua.siteUrl,
  },
]

const StyledVersions = styled.ul`
  display: flex;
  justify-content: center;
  flex: 0 0 auto;

  li:not(:last-child) {
    margin-right: 1.5rem;
  }
`

const StyledLink = styled(ExternalLink)`
  display: flex;
  width: 2.8rem;
  height: 2.8rem;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  opacity: ${props => (props.sameCard ? 1 : 0.5)};
  border-radius: 50%;
  font-size: 1rem;
`

const LanguageVersions = () => (
  <StyledVersions>
    {versions.map(version => (
      <li key={version.url}>
        <StyledLink
          url={version.url}
          sameCard={version.url === process.env.GATSBY_SITE_URL}
        >
          {version.shortcut}
        </StyledLink>
      </li>
    ))}
  </StyledVersions>
)

export default LanguageVersions
