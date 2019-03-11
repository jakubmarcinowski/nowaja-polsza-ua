import React from 'react'
import styled from 'styled-components'

import Paragraph from './Paragraph'
import { mediaQueries } from '../utils/mediaQueries'
import { highlightedEventType } from '../types/highlightedEvent'

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 8rem;
  height: 8rem;
  padding: 1rem;
  margin-left: -0.4rem;
  background-color: ${({ theme }) => theme.colors.pickledBluewood};

  @media ${mediaQueries.tablet} {
    flex: 0 0 9rem;
    height: 9rem;
  }

  @media ${mediaQueries.desktop} {
    flex: 0 0 10rem;
    height: 10rem;
  }
`

const Date = styled(Paragraph)`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
`

const City = styled(Paragraph)`
  padding-top: 0.7rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
`

const Title = styled(Paragraph)`
  height: 9.4rem;
  overflow: hidden;
  padding: 0 3.5rem 0 2rem;
  color: ${({ theme }) => theme.colors.dark};

  @media ${mediaQueries.tablet} {
    height: 11.6rem;
  }

  @media ${mediaQueries.desktop} {
    height: 12.5rem;
  }
`

const EventItem = ({ event }) => (
  <Wrapper>
    <Container>
      <Date size="Bigger" lineHeight="Small">
        {event.expirationDay}
        <br/>
        {event.expirationMonth}
      </Date>
      <City size="MediumSmall" lineHeight="Small">
        {event.city}
      </City>
    </Container>
    <Title size="Bigger" weight="Bold">
      {event.title}
    </Title>
  </Wrapper>
)

EventItem.propTypes = {
  event: highlightedEventType,
}

export default EventItem
