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
const Date = styled.span`
  display: inline-block;
  margin: 0 0 1.5rem;
  padding: 0 2rem;
  font-family: ${({ theme }) => theme.fonts.secondary};

  line-height: 1.8;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  @media ${mediaQueries.tablet} {
    font-size: 1.8rem;
  }
`
const TicketText = styled.span`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
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
      location,
    } = this.props.event
    const { hasFullDescription } = this.state
    return (
      <BoxWithPhoto image={heroImage}>
        <Container>
          <div>
            {displayedDate && (
              <div>
                <Date>{displayedDate}</Date>
              </div>
            )}

            {title && (
              <Header
                size="Bigger"
                margin="0 0 0.4em"
                color="Black"
                weight="Bold"
                type={3}
              >
                {title}
              </Header>
            )}
            {location && <IconGroup src={IconPin}>{location}</IconGroup>}
            {organizer && <IconGroup src={IconUser}>{organizer}</IconGroup>}
          </div>
          <div>
            {link && (
              <ExternalLink url={link}>
                <IconGroup src={IconTicket}>
                  <TicketText>событие в фейсбуке</TicketText>
                </IconGroup>
              </ExternalLink>
            )}
          </div>
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
