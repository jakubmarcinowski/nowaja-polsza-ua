import React from 'react'
import styled from 'styled-components'

import ExternalLink from './ExternalLink'
import facebook from '../../static/spongebob.png'

const List = styled.ul``

const Item = styled.li`
  display: inline;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`

const Logo = styled.img`
  max-height: 30px;
  max-width: 30px;
`

const SocialMediaList = () => (
  <List>
    <Item>
      {/* TODO change a to Link componenent when ready */}
      <ExternalLink url="https://www.github.com/maisonm">
        <Logo src={facebook} alt="Facebook Nowaja Polsza" />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink url="https://www.github.com/maisonm" sameCard>
        <Logo src={facebook} alt="Facebook Nowaja Polsza" />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink url="https://www.github.com/maisonm">
        <Logo src={facebook} alt="Facebook Nowaja Polsza" />
      </ExternalLink>
    </Item>
  </List>
)

export default SocialMediaList
