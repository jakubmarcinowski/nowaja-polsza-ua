import React from 'react'
import PropTypes from 'prop-types'

import Publication from './subcomponents/Publication'
import Wrapper from '../../components/Wrapper'
import HeaderWithLine from '../../components/HeaderWithLine'

const PublicationPage = ({ publications, title }) => (
  <Wrapper size="Medium">
    <HeaderWithLine>{title}</HeaderWithLine>
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
  title: PropTypes.string,
}

export default PublicationPage
