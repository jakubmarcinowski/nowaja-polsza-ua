import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContent = styled.div`
  padding: 7rem 0;
  line-height: 1.6;

  p {
    font-size: 2rem;
    max-width: 674px;
    margin: 0 auto;

    img {
      position: absolute;
      max-width: calc(100% - 160px);
      left: 80px;
      display: block;
      display: block;
    }
  }
`

const Content = ({ html }) => {
  return (
    <StyledContent
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}

Content.propTypes = {
  html: PropTypes.string,
}

export default Content
