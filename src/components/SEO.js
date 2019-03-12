import React from 'react'
import Helmet from 'react-helmet'

import image from '../../static/logo.svg'

// @todo static query
const SEO = ({ siteTitle, children }) => (
  <Helmet>
    <title>{siteTitle}</title>
    <meta name="description" content="..." />
    <meta name="image" content={image} />
    {children}
  </Helmet>
)

export default SEO
