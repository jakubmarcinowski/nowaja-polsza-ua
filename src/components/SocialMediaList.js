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

import facebookFullGray from '../../static/social-fb-full-gray.svg'
import twitterFullGray from '../../static/social-twitter-full-gray.svg'
import telegramFullGray from '../../static/social-telegram-full-gray.svg'
import vkFullGray from '../../static/social-vk-full-gray.svg'
import { mediaQueries } from '../utils/mediaQueries'

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;


  ${({ article }) =>
    article ? 'max-width: 200px;  margin: 0 auto;' : 'width: 200px;'}

  @media ${mediaQueries.large} {
    ${({ vertical }) => vertical && 'flex-direction: column; height: 230px;'}
  }
`

const Item = styled.li`
  display: inline;

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

  ${({ article }) =>
    article &&
    `
    height: 25px;
    width: 25px;
  `}
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
    const { className, header, semiTransparent, article, vertical } = this.props

    return (
      <List
        className={className}
        header={header}
        vertical={vertical}
        article={article}
      >
        <Item semiTransparent={semiTransparent}>
          <ExternalLink
            url={
              article
                ? `https://www.facebook.com/sharer/sharer.php?u=${
                    this.state.locationHref
                  }`
                : 'https://www.boldare.com'
            }
          >
            <Logo
              article={article}
              src={
                header ? facebookFull : article ? facebookFullGray : facebook
              }
              alt="Facebook Nowaja Polsza"
            />
          </ExternalLink>
        </Item>
        <Item semiTransparent={semiTransparent}>
          <ExternalLink
            url={
              article
                ? `https://twitter.com/intent/tweet?original_referer=${
                    this.state.locationHref
                  }`
                : 'https://www.boldare.com'
            }
          >
            <Logo
              article={article}
              src={header ? twitterFull : article ? twitterFullGray : twitter}
              alt="Twitter Nowaja Polsza"
            />
          </ExternalLink>
        </Item>
        <Item semiTransparent={semiTransparent}>
          <ExternalLink
            url={
              article
                ? `https://telegram.me/share/url?url=${this.state.locationHref}`
                : 'https://www.boldare.com'
            }
          >
            <Logo
              article={article}
              src={
                header ? telegramFull : article ? telegramFullGray : telegram
              }
              alt="Telegram Nowaja Polsza"
            />
          </ExternalLink>
        </Item>
        {article || (
          <Item semiTransparent={semiTransparent}>
            <ExternalLink url="https://www.boldare.com">
              <Logo
                src={header ? youtubeFull : youtube}
                alt="YouTube Nowaja Polsza"
              />
            </ExternalLink>
          </Item>
        )}
        <Item semiTransparent={semiTransparent}>
          <ExternalLink
            url={
              article
                ? `https://vk.com/share.php?url=${this.state.locationHref}`
                : 'https://www.boldare.com'
            }
          >
            <Logo
              article={article}
              src={header ? vkFull : article ? vkFullGray : vk}
              alt="VK Nowaja Polsza"
            />
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
  article: PropTypes.bool,
  vertical: PropTypes.bool,
}

export default SocialMediaList
