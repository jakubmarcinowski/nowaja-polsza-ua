import React from 'react'
import PropTypes from 'prop-types'

import Publication from './subcomponents/Publication'
import Wrapper from '../../components/Wrapper'

const PublicationPage = ({ publications }) => (
  <Wrapper>
    {publications.map(({ node, node: { slug } }) => (
      <Publication publication={node} key={slug} />
    ))}
  </Wrapper>
)

PublicationPage.propTypes = {
  publications: PropTypes.any,
}

export default PublicationPage
