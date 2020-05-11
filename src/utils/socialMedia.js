import { useStaticQuery, graphql } from 'gatsby'

export const novPolSocialMediaUrls = () => {
  const data = useStaticQuery(graphql`
    query socialMedia {
      contentfulHomepageStaticContent {
        facebook
        twitter
        telegram
        youtube
        vk
      }
    }
  `)
  const {
    facebook,
    twitter,
    telegram,
    youtube,
    vk,
  } = data.contentfulHomepageStaticContent

  return {
    facebook: `https://www.facebook.com/${facebook}/`,
    twitter: `https://twitter.com/${twitter}`,
    telegram: `https://t.me/${telegram}`,
    youtube: `https://www.youtube.com/channel/${youtube}`,
    vk: `https://vk.com/${vk}`,
  }
}

export const shareSocialMediaUrls = {
  facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
  twitter: 'https://twitter.com/intent/tweet?original_referer=',
  telegram: 'https://telegram.me/share/url?url=',
  youtube: '',
  vk: 'https://vk.com/share.php?url=',
}
