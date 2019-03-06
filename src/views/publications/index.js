import React from 'react'
import PropTypes from 'prop-types'

import Publication from './subcomponents/Publication'
import Wrapper from '../../components/Wrapper'
import HeaderWithLine from '../../components/HeaderWithLine'

const PublicationPage = ({ publications }) => (
  <Wrapper size="Medium">
    <HeaderWithLine>библиотека</HeaderWithLine>
    {publications &&
      (publications.length === 0
        ? 'Нет публикации'
        : publications.map(({ node, node: { slug } }) => (
            <Publication publication={node} key={slug} />
          )))}
  </Wrapper>
)

PublicationPage.propTypes = {
  publications: PropTypes.any,
}

export default PublicationPage
