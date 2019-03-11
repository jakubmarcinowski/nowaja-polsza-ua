import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import Header from './Header'
import ReadMoreButton from './ReadMoreButton'
import EventItem from './EventItem'
import { highlightedEventType } from '../types/highlightedEvent'
import { mediaQueries } from '../utils/mediaQueries'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 575rem;
  padding: 2.5rem 0;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 0 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
`

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.7rem 0 2.5rem;

  @media ${mediaQueries.tablet} {
    min-height: 350px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 3.5rem;
`

const EventsContainer = ({ events }) => (
  <Container>
    <InnerContainer>
      <HeaderContainer>
        <Header
          weight="Bold"
          type={2}
          size="Big"
          color="Dark"
          margin="0 0 1.4rem"
          lineHeight="Medium"
          overflow="hidden"
        >
          предстоящие события
        </Header>
      </HeaderContainer>
      <EventsList>
        {events &&
          events.map(event => <EventItem event={event} key={event.id} />)}
      </EventsList>
      <ButtonContainer>
        <ReadMoreButton>
          <Link to="/events">Узнать больше</Link>
        </ReadMoreButton>
      </ButtonContainer>
    </InnerContainer>
  </Container>
)

EventsContainer.propTypes = {
  events: PropTypes.arrayOf(highlightedEventType),
}

export default EventsContainer
