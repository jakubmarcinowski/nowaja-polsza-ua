import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ExternalLink from './ExternalLink'

import facebookFull from '../../static/social-fb-full.svg'
import twitterFull from '../../static/social-twitter-full.svg'
import youtubeFull from '../../static/social-yt-full.svg'
import telegramFull from '../../static/social-telegram-full.svg'
import vkFull from '../../static/social-vk-full.svg'

import facebookFullGray from '../../static/social-fb-full-gray.svg'
import twitterFullGray from '../../static/social-twitter-full-gray.svg'
import youtubeFullGray from '../../static/social-yt-full-gray.svg'
import telegramFullGray from '../../static/social-telegram-full-gray.svg'
import vkFullGray from '../../static/social-vk-full-gray.svg'

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`

const Item = styled.li`
  display: inline;

  ${({ isSemiTransparent }) =>
    isSemiTransparent &&
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

  ${({ isBig }) =>
  isBig &&
    `
    height: 25px;
    width: 25px;
  `}
`

class SocialMediaList extends React.Component {
  state = {
    locationHref: '',
  }

  componentDidMount() {
    this.setState({ locationHref: window.location.href })
  }

  render() {
    const {
      className,
      isHeader,
      isSemiTransparent,
      isArticle,
      isBig,
    } = this.props

    return (
      <List className={className} isHeader={isHeader}>
        <Item isSemiTransparent={isSemiTransparent}>
          <ExternalLink
            url={
              isArticle
                ? `https://www.facebook.com/sharer/sharer.php?u=${
                    this.state.locationHref
                  }`
                : 'https://www.facebook.com/novayapolsha/'
            }
          >
            <Logo
              isBig={isBig}
              src={isHeader ? facebookFull : facebookFullGray}
              alt="Facebook Nowaja Polsza"
            />
          </ExternalLink>
        </Item>
        <Item isSemiTransparent={isSemiTransparent}>
          <ExternalLink
            url={
              isArticle
                ? `https://twitter.com/intent/tweet?original_referer=${
                    this.state.locationHref
                  }`
                : 'https://twitter.com/novayapolsha'
            }
          >
            <Logo
              isBig={isBig}
              src={isHeader ? twitterFull : twitterFullGray}
              alt="Twitter Nowaja Polsza"
            />
          </ExternalLink>
        </Item>
        <Item isSemiTransparent={isSemiTransparent}>
          <ExternalLink
            url={
              isArticle
                ? `https://telegram.me/share/url?url=${this.state.locationHref}`
                : 'https://t.me/novayapolsha'
            }
          >
            <Logo
              isBig={isBig}
              src={isHeader ? telegramFull : telegramFullGray}
              alt="Telegram Nowaja Polsza"
            />
          </ExternalLink>
        </Item>
        {isArticle || (
          <Item isSemiTransparent={isSemiTransparent}>
            <ExternalLink url="https://www.youtube.com/channel/UChqH28eDLVsTpfi6C3QxRcg">
              <Logo
                isBig={isBig}
                src={isHeader ? youtubeFull : youtubeFullGray}
                alt="YouTube Nowaja Polsza"
              />
            </ExternalLink>
          </Item>
        )}
        <Item isSemiTransparent={isSemiTransparent}>
          <ExternalLink
            url={
              isArticle
                ? `https://vk.com/share.php?url=${this.state.locationHref}`
                : 'https://vk.com/novayapolsha'
            }
          >
            <Logo
              isBig={isBig}
              src={isHeader ? vkFull : vkFullGray}
              alt="VK Nowaja Polsza"
            />
          </ExternalLink>
        </Item>
      </List>
    )
  }
}

SocialMediaList.propTypes = {
  className: PropTypes.string,
  isHeader: PropTypes.bool,
  isWhite: PropTypes.bool,
  isSemiTransparent: PropTypes.bool,
  isArticle: PropTypes.bool,
  isBig: PropTypes.bool,
}

export default SocialMediaList
