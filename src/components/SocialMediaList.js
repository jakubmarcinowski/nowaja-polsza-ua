import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ExternalLink from './ExternalLink'
import facebook from '../../static/social-fb.svg'
import twitter from '../../static/social-twitter.svg'
import youtube from '../../static/social-yt.svg'
import telegram from '../../static/social-telegram.svg'
import vk from '../../static/social-vk.svg'

import facebookFull from '../../static/social-fb-full.svg'
import twitterFull from '../../static/social-twitter-full.svg'
import youtubeFull from '../../static/social-yt-full.svg'
import telegramFull from '../../static/social-telegram-full.svg'
import vkFull from '../../static/social-vk-full.svg'

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
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

const SocialMediaList = ({ className, header }) => (
  <List className={className} header={header}>
    <Item>
      <ExternalLink url="https://www.boldare.com">
        <Logo
          src={header ? facebookFull : facebook}
          alt="Facebook Nowaja Polsza"
        />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink url="https://www.boldare.com">
        <Logo
          src={header ? twitterFull : twitter}
          alt="Twitter Nowaja Polsza"
        />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink url="https://www.boldare.com">
        <Logo
          src={header ? telegramFull : telegram}
          alt="Telegram Nowaja Polsza"
        />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink url="https://www.boldare.com">
        <Logo
          src={header ? youtubeFull : youtube}
          alt="YouTube Nowaja Polsza"
        />
      </ExternalLink>
    </Item>
    <Item>
      <ExternalLink url="https://www.boldare.com">
        <Logo src={header ? vkFull : vk} alt="VK Nowaja Polsza" />
      </ExternalLink>
    </Item>
  </List>
)

SocialMediaList.propTypes = {
  className: PropTypes.any,
  header: PropTypes.bool,
}

export default SocialMediaList
