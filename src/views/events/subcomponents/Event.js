import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../../utils/mediaQueries'
import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import IconPin from '../../../../static/icon-pin.svg'
import IconTicket from '../../../../static/icon-ticket.svg'
import IconUser from '../../../../static/icon-user.svg'
import ExternalLink from '../../../components/ExternalLink'
import IconGroup from '../../../components/IconGroup'
import ReadMoreWrapper from '../../../components/ReadMoreWrapper'

const Container = styled.div`
  @media ${mediaQueries.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`

const ContainerTop = styled.div`
  margin-bottom: 1rem;

  @media ${mediaQueries.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
`

const LeftColumn = styled.div`
  flex: 1;
`

const Date = styled.span`
  display: inline-block;
  padding: 0.3em 1.1em;
  font-family: ${({ theme }) => theme.fonts.secondary};

  line-height: 1.4;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  @media ${mediaQueries.tablet} {
    margin-right: 1.5rem;
    font-size: 1.6rem;
  }

  @media ${mediaQueries.desktop} {
    font-size: 1.8rem;
  }
`
const TicketText = styled.span`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.secondary};

  &:hover {
    opacity: 0.6;
  }

  @media ${mediaQueries.tablet} {
    font-size: 1.4rem;
  }
`

const Details = styled(Header)`
  font-size: 1.2rem;
  letter-spacing: 0.5px;

  @media ${mediaQueries.tablet} {
    font-size: 1.4rem;
  }

  @media ${mediaQueries.desktop} {
    font-size: 1.6rem;
  }
`

const DetailsWrapper = styled(IconGroup)`
  margin-bottom: 1rem;
`

const TicketsContainerDesktop = styled.div`
  display: none;

  @media ${mediaQueries.tablet} {
    display: block;
  }
`

const TicketsContainerMobile = styled.div`
  @media ${mediaQueries.tablet} {
    display: none;
  }
`

const Event = ({
  event: {
    title,
    heroImage,
    lead,
    displayedDate,
    organizer,
    link,
    city,
    address,
  },
}) => (
  <BoxWithPhoto image={heroImage}>
    <ContainerTop>
      <LeftColumn>
        {displayedDate && (
          <div>
            <Date>{displayedDate}</Date>
          </div>
        )}
      </LeftColumn>
      <TicketsContainerDesktop>
        {link && (
          <ExternalLink url={link}>
            <IconGroup src={IconTicket}>
              <TicketText>
                <u>Мероприятие в Фейсбуке</u>
              </TicketText>
            </IconGroup>
          </ExternalLink>
        )}
      </TicketsContainerDesktop>
    </ContainerTop>
    <Container>
      <LeftColumn>
        {title && (
          <Header
            size="Bigger"
            lineHeight="Medium"
            margin="0 0 2.5rem"
            color="Black"
            weight="Bold"
            type={3}
          >
            {title}
          </Header>
        )}
        {city && address && (
          <DetailsWrapper src={IconPin}>
            <Details
              type={2}
              size="Medium"
              color="Dark"
              lineHeight="Medium"
            >{`${address} ${city}`}</Details>
          </DetailsWrapper>
        )}
        {organizer && (
          <DetailsWrapper src={IconUser}>
            <Details type={2} size="Medium" color="Dark" lineHeight="Medium">
              {organizer}
            </Details>
          </DetailsWrapper>
        )}
        <TicketsContainerMobile>
          {link && (
            <ExternalLink url={link}>
              <IconGroup src={IconTicket}>
                <TicketText>
                  <u>Мероприятие в Фейсбуке</u>
                </TicketText>
              </IconGroup>
            </ExternalLink>
          )}
        </TicketsContainerMobile>
      </LeftColumn>
    </Container>
    <ReadMoreWrapper description={lead} />
  </BoxWithPhoto>
)

Event.propTypes = {
  event: PropTypes.any,
}

export default Event
