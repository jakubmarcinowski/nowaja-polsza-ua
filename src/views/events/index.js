import React from 'react'
import PropTypes from 'prop-types'

import Event from './subcomponents/Event'
import Wrapper from '../../components/Wrapper'
import HeaderWithLine from '../../components/HeaderWithLine'

const EventPage = ({ events, title }) => (
  <Wrapper size="Medium">
    <HeaderWithLine>{title}</HeaderWithLine>
    {events &&
      (events.length === 0
        ? 'Нет событий'
        : events.map(({ node, node: { slug } }) => (
            <Event event={node} key={slug} />
          )))}
  </Wrapper>
)

EventPage.propTypes = {
  events: PropTypes.any,
  title: PropTypes.string,
}

export default EventPage
