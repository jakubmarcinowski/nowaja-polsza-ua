import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
  return <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Container
