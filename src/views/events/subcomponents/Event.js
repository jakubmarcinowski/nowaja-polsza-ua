import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../../utils/mediaQueries'
import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import FacebookIconUrl from '../../../../static/icon-facebook.svg'
import ExternalLink from '../../../components/ExternalLink'
import ReadMoreButton from '../../../components/ReadMoreButton'

const Container = styled.div`
  margin-bottom: 1em;

  @media ${mediaQueries.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`
const HeaderBox = styled.div`
  margin-bottom: 1rem;

  @media ${mediaQueries.tablet} {
    margin-bottom: 0;
  }
`
const Organizer = styled.div`
  margin-bottom: 1em;
`
const Date = styled.span`
  display: inline-block;
  margin: 0 0 1rem;
  padding: 0 2rem;

  line-height: 1.8;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  @media ${mediaQueries.tablet} {
    margin: 1rem 1rem 1rem 0;
    font-size: 1.8rem;
  }
`
const Location = styled.div`
  margin: 1rem 2rem 0 0;
`
const FacebookButton = styled(ExternalLink)`
  display: flex;
  align-items: center;
`
const FacebookIcon = styled.img`
  margin-right: 1.5rem;
`
const FacebookText = styled.span`
  font-weight: 700;
`

//@todo Unify ParagraphsWrapper for Event and Publication
const ParagraphsWrapper = styled.div`
  margin: 2em 0;
  max-width: 830px;
  line-height: 1.8;
  font-weight: 300;

  @media ${mediaQueries.tablet} {
    line-height: 2;
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
          <div>{displayedDate && <Date>{displayedDate}</Date>}</div>

          {link && (
            <FacebookButton url={link}>
              <FacebookIcon src={FacebookIconUrl} />
              <FacebookText>событие в фейсбуке</FacebookText>
            </FacebookButton>
          )}
        </Container>
        <HeaderBox>
          {title && (
            <Header
              size="Big"
              margin="0 0 0.8em"
              color="Black"
              weight="Bold"
              type={3}
            >
              {title}
            </Header>
          )}
          {organizer && <Organizer>{organizer}</Organizer>}
          {location && <Location>{location}</Location>}
        </HeaderBox>
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

Event.propTypes = {
  event: PropTypes.any,
}

export default Event
