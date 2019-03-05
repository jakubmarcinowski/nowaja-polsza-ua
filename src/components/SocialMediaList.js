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
import academiaFullGray from '../../static/social-academia-full-gray.svg'

const Item = styled.li`
  display: inline;
  padding: 0 1.1rem;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }

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
      isWhite,
      isSemiTransparent,
      isShareUrl,
      isBig,
      urls: { facebook, twitter, telegram, youtube, vk, academia },
    } = this.props

    return (
      <ul className={className}>
        {facebook && (
          <Item isSemiTransparent={isSemiTransparent}>
            <ExternalLink
              url={`${facebook}${
                isShareUrl ? this.state.locationHref : ''
                }`}
            >
              <Logo
                isBig={isBig}
                src={isWhite ? facebookFull : facebookFullGray}
                alt="Facebook"
              />
            </ExternalLink>
          </Item>
        )}
        {twitter && (
          <Item isSemiTransparent={isSemiTransparent}>
            <ExternalLink
              url={`${twitter}${isShareUrl ? this.state.locationHref : ''}`}
            >
              <Logo
                isBig={isBig}
                src={isWhite ? twitterFull : twitterFullGray}
                alt="Twitter"
              />
            </ExternalLink>
          </Item>
        )}
        {telegram && (
          <Item isSemiTransparent={isSemiTransparent}>
            <ExternalLink
              url={`${telegram}${
                isShareUrl ? this.state.locationHref : ''
                }`}
            >
              <Logo
                isBig={isBig}
                src={isWhite ? telegramFull : telegramFullGray}
                alt="Telegram"
              />
            </ExternalLink>
          </Item>
        )}
        {youtube && (
          <Item isSemiTransparent={isSemiTransparent}>
            <ExternalLink url={youtube}>
              <Logo
                isBig={isBig}
                src={isWhite ? youtubeFull : youtubeFullGray}
                alt="YouTube"
              />
            </ExternalLink>
          </Item>
        )}
        {vk && (
          <Item isSemiTransparent={isSemiTransparent}>
            <ExternalLink
              url={`${vk}${isShareUrl ? this.state.locationHref : ''}`}
            >
              <Logo
                isBig={isBig}
                src={isWhite ? vkFull : vkFullGray}
                alt="VK"
              />
            </ExternalLink>
          </Item>
        )}
        {academia && (
          <Item isSemiTransparent={isSemiTransparent}>
            <ExternalLink
              url={`${academia}${
                isShareUrl ? this.state.locationHref : ''
                }`}
            >
              <Logo isBig={isBig} src={academiaFullGray} alt="Academia"/>
            </ExternalLink>
          </Item>
        )}
      </ul>
    )
  }
}

SocialMediaList.propTypes = {
  className: PropTypes.string,
  urls: PropTypes.object,
  isWhite: PropTypes.bool,
  isSemiTransparent: PropTypes.bool,
  isShareUrl: PropTypes.bool,
  isBig: PropTypes.bool,
}

export default SocialMediaList
