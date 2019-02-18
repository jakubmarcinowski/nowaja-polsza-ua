import React from 'react'
import styled from 'styled-components'

import ExternalLink from './ExternalLink'
import facebook from '../../static/social-fb.svg'
import twitter from '../../static/social-twitter.svg'
import youtube from '../../static/social-yt.svg'
import telegram from '../../static/social-telegram.svg'
import vk from '../../static/social-vk.svg'

const List = styled.ul`
  display: flex;
  align-items: center;
`

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
      <ExternalLink url="https://www.boldare.com">
        <Logo src={facebook} alt="Facebook Nowaja Polsza" />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink url="https://www.boldare.com">
        <Logo src={twitter} alt="Twitter Nowaja Polsza" />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink url="https://www.boldare.com">
        <Logo src={telegram} alt="Telegram Nowaja Polsza" />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink url="https://www.boldare.com">
        <Logo src={youtube} alt="YouTube Nowaja Polsza" />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink url="https://www.boldare.com">
        <Logo src={vk} alt="VK Nowaja Polsza" />
      </ExternalLink>
    </Item>
  </List>
)

export default SocialMediaList
