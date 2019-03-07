import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../../utils/mediaQueries'
import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import IconPin from '../../../../static/icon-pin.svg'
import IconTicket from '../../../../static/icon-ticket.svg'
import IconUser from '../../../../static/icon-user.svg'
import ExternalLink from '../../../components/ExternalLink'
import ReadMoreButton from '../../../components/ReadMoreButton'
import IconGroup from '../../../components/IconGroup'

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
  padding: 0 2rem;
  font-family: ${({ theme }) => theme.fonts.secondary};

  line-height: 2.4;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  @media ${mediaQueries.tablet} {
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
//@todo Unify ParagraphsWrapper for Event and Publication
const ParagraphsWrapper = styled.div`
  margin: 2em 0;
  max-width: 83rem;
  line-height: 1.8;
  font-weight: 300;
  font-size: 1.4rem;

  @media ${mediaQueries.tablet} {
    line-height: 2;
    font-size: 1.6rem;
  }

  ${({ hasFullDescription }) =>
    !hasFullDescription &&
    `
    max-height: 7.3rem;
    overflow: hidden;

    @media ${mediaQueries.tablet} {
      max-height: 6rem;
    }
  `}
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

class Event extends Component {
  // @todo DRY Create component for toogle description for Events and Publications
  state = {
    hasFullDescription: false,
  }
  toggleDescription = () => {
    this.setState(({ hasFullDescription }) => ({
      hasFullDescription: !hasFullDescription,
    }))
  }
  render() {
    const {
      title,
      heroImage,
      lead,
      displayedDate,
      organizer,
      link,
      city,
      address,
    } = this.props.event
    const { hasFullDescription } = this.state
    return (
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
                    <u>событие в фейсбуке</u>
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
                <Details
                  type={2}
                  size="Medium"
                  color="Dark"
                  lineHeight="Medium"
                >
                  {organizer}
                </Details>
              </DetailsWrapper>
            )}
            <TicketsContainerMobile>
              {link && (
                <ExternalLink url={link}>
                  <IconGroup src={IconTicket}>
                    <TicketText>
                      <u>событие в фейсбуке</u>
                    </TicketText>
                  </IconGroup>
                </ExternalLink>
              )}
            </TicketsContainerMobile>
          </LeftColumn>
        </Container>
        {lead && (
          <ParagraphsWrapper
            hasFullDescription={hasFullDescription}
            dangerouslySetInnerHTML={{
              __html: lead.childMarkdownRemark.html,
            }}
          />
        )}
        <ReadMoreButton onClick={this.toggleDescription}>
          {hasFullDescription ? 'Показывай меньше' : 'Показать больше'}
        </ReadMoreButton>
      </BoxWithPhoto>
    )
  }
}

// @todo ReadMore shoudn't be visible if text is short

Event.propTypes = {
  event: PropTypes.any,
}

export default Event
