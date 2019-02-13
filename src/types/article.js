import PropTypes from 'prop-types'

export const articleType = PropTypes.shape({
  author: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
  }),
  categories: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, slug: PropTypes.string })
  ),
  description: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
  heroImage: PropTypes.shape({
    fluid: PropTypes.shape({
      aspectRatio: PropTypes.number,
      base64: PropTypes.string,
      sizes: PropTypes.string,
      src: PropTypes.string,
      srcSet: PropTypes.string,
    }),
  }),
  publishDate: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
})
