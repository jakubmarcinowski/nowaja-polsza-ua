import React from 'react'
import PropTypes from 'prop-types'
import './Footnote.scss'

const Footnote = ({ children, content }) => (
  <a className="footnote" href="https://onet.pl">
    {children}
    <div className="footnote__description">{content}</div>
  </a>
)

Footnote.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
}

export default Footnote
