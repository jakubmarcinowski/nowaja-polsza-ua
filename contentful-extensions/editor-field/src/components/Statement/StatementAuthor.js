import React from 'react'
import PropTypes from 'prop-types'
import statementIcon from './statement-icon.svg'
import './Statement.scss'

const StatementAuthor = ({ image, children }) => {
  return (
    <div className="statement__author">
      <img src={image.url} className="statement__image" />
      <span className="statement__name">{children}</span>
      <img src={statementIcon} className="statement__icon" />
    </div>
  )
}

StatementAuthor.propTypes = {
  image: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default StatementAuthor
