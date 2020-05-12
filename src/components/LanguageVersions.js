import React from 'react'
import styled from 'styled-components'

import ExternalLink from 'components/ExternalLink'

const versions = [
  {
    shortcut: 'РУС',
    url: 'https://novayapolsha.pl/',
  },
  {
    shortcut: 'УКР',
    url: 'https://novayapolsha-ua.netlify.app/',
  },
]

const StyledVersions = styled.ul`
  display: flex;
  justify-content: center;

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
