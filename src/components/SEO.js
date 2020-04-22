import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import logo from 'static/logo.svg'

class SEO extends Component {
  state = {
    locationHref: '',
  }

  componentDidMount() {
    this.setState({ locationHref: window.location.href })
  }

  render() {
    const { siteTitle, description, type, image } = this.props
    const { locationHref } = this.state

    return (
      <Helmet>
        <html lang="ru" />
        <title>{siteTitle}</title>
        <meta
          name="google-site-verification"
          content="VAcDR6SFVZ0YzkE5bFdsnrvRu3kUjG5h8bWKStYd92c"
        />
        <meta name="description" content={description} />
        <meta name="image" content={image || logo} />

        <meta property="og:url" content={locationHref} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image || logo} />

        <meta name="twitter:card" content={type} />
        <meta name="twitter:site" content={locationHref} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image || logo} />
      </Helmet>
    )
  }
}

SEO.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
