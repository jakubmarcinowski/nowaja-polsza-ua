import PropTypes from 'prop-types'

export const articleType = PropTypes.shape({
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, slug: PropTypes.string })
  ),
  leadLong: PropTypes.any,
  heroImage: PropTypes.shape({
    fluid: PropTypes.shape({
      aspectRatio: PropTypes.number,
      base64: PropTypes.string,
      sizes: PropTypes.string,
      src: PropTypes.string,
      srcSet: PropTypes.string,
    }),
  }),
  heroImageThumbnail: PropTypes.shape({
    fluid: PropTypes.shape({
      aspectRatio: PropTypes.number,
      base64: PropTypes.string,
      sizes: PropTypes.string,
      src: PropTypes.string,
      srcSet: PropTypes.string,
    }),
  }),
  heroImageCredit: PropTypes.string,
  publishDate: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  galleryDescription: PropTypes.string,
  secondLanguageSlug: PropTypes.string,
})
