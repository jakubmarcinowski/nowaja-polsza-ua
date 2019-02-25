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

  ${({ semiTransparent }) =>
    semiTransparent &&
    `
    opacity: 0.5;
    
    &:hover {
      opacity: 1;
    }
  `}
`

const Logo = styled.img`
  max-height: 30px;
  max-width: 30px;
`

// @todo replace static social media urls with correct ones.

class SocialMediaList extends React.Component {
  state = {
    locationHref: '',
  }

  componentDidMount() {
    this.setState({ locationHref: window.location.href })
  }

  render() {
    const { className, header, semiTransparent, share } = this.props

    return (
      <List className={className} header={header}>
        <Item semiTransparent={semiTransparent}>
          <ExternalLink
            url={
              share
                ? `https://www.facebook.com/sharer/sharer.php?u=${
                    this.state.locationHref
                  }`
                : 'https://www.boldare.com'
            }
          >
            <Logo
              src={header ? facebookFull : facebook}
              alt="Facebook Nowaja Polsza"
            />
          </ExternalLink>
        </Item>
        <Item semiTransparent={semiTransparent}>
          <ExternalLink url="https://www.boldare.com">
            <Logo
              src={header ? twitterFull : twitter}
              alt="Twitter Nowaja Polsza"
            />
          </ExternalLink>
        </Item>
        <Item semiTransparent={semiTransparent}>
          <ExternalLink url="https://www.boldare.com">
            <Logo
              src={header ? telegramFull : telegram}
              alt="Telegram Nowaja Polsza"
            />
          </ExternalLink>
        </Item>
        <Item semiTransparent={semiTransparent}>
          <ExternalLink url="https://www.boldare.com">
            <Logo
              src={header ? youtubeFull : youtube}
              alt="YouTube Nowaja Polsza"
            />
          </ExternalLink>
        </Item>
        <Item semiTransparent={semiTransparent}>
          <ExternalLink url="https://www.boldare.com">
            <Logo src={header ? vkFull : vk} alt="VK Nowaja Polsza" />
          </ExternalLink>
        </Item>
      </List>
    )
  }
}

SocialMediaList.propTypes = {
  className: PropTypes.any,
  header: PropTypes.bool,
  semiTransparent: PropTypes.bool,
  share: PropTypes.bool,
}

export default SocialMediaList
