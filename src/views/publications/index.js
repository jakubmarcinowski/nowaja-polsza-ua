import React from 'react'
import PropTypes from 'prop-types'

import Publication from './subcomponents/Publication'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import Line from '../../components/Line'

// @todo crete styled component for page header which is center and has a line

const PublicationPage = ({ publications }) => (
  <Wrapper size="Medium">
    <Header
      size="Big"
      margin="5rem auto 2.5rem"
      color="Black"
      weight="Bold"
      type={2}
      textAlign="center"
    >
      библиотека
    </Header>
    <Line />
    {publications && publications.length === 0
      ? 'Нет публикации'
      : publications.map(({ node, node: { slug } }) => (
          <Publication publication={node} key={slug} />
        ))}
  </Wrapper>
)

PublicationPage.propTypes = {
  publications: PropTypes.any,
}

export default PublicationPage
