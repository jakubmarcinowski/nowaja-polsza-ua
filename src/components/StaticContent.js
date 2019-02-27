import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Wrapper from './Wrapper'

const StyledContent = styled.div``

const StaticContent = ({ content }) => {
  return (
    <Wrapper>
      <styledContent
        dangerouslySetInnerHTML={{
          __html: content.childMarkdownRemark.html,
        }}
      />
    </Wrapper>
  )
}

StaticContent.propTypes = {
  content: PropTypes.shape({
    content: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
  }),
}

export default StaticContent
