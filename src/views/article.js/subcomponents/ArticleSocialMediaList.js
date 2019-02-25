import React from 'react'
import SocialMediaList from '../../../components/SocialMediaList'
import Paragraph from '../../../components/Paragraph'

const ArticleSocialMediaList = () => (
  <>
    <Paragraph>Поделиться</Paragraph>
    <SocialMediaList share />
  </>
)

ArticleSocialMediaList.propTypes = {}

export default ArticleSocialMediaList
