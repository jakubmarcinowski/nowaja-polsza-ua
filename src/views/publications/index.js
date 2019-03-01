import React from 'react'
import PropTypes from 'prop-types'

import Publication from './subcomponents/Publication'
import Wrapper from '../../components/Wrapper'

const PublicationPage = ({ publications }) => (
  <Wrapper>
    {publications.map(({ node }, i) => (
      <Publication publication={node} key={i} />
    ))}
  </Wrapper>
)

PublicationPage.propTypes = {
  publications: PropTypes.any,
}

export default PublicationPage
