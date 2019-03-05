import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Event from './subcomponents/Event'
import Wrapper from '../../components/Wrapper'
import Header from '../../components/Header'
import Line from '../../components/Line'

const EventsWrapper = styled.div`
  padding: 4rem 0;
`

// @todo crete styled component for page header which is center and has a line

const EventPage = ({ events }) => (
  <Wrapper size="Medium">
    <Header
      size="Big"
      margin="5rem auto 2.5rem"
      color="Black"
      weight="Bold"
      type={2}
      textAlign="center"
    >
      Предстоящие события
    </Header>
    <Line />
    <EventsWrapper>
      {events && events.length === 0
        ? 'Нет событий'
        : events.map(({ node, node: { slug } }) => (
            <Event event={node} key={slug} />
          ))}
    </EventsWrapper>
  </Wrapper>
)

EventPage.propTypes = {
  events: PropTypes.any,
}

export default EventPage
