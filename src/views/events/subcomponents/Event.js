import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../../utils/mediaQueries'
import BoxWithPhoto from '../../../components/BoxWithPhoto'
import Header from '../../../components/Header'
import ButtonWithIcon from '../../../components/ButtonWithIcon'
import FacebookIcon from '../../../../static/icon-facebook.svg'

const Info = styled.div`
  padding: 1rem 0 2rem 1rem;

  @media ${mediaQueries.tablet} {
    padding: 3rem 0 4rem 1rem;
  }
`
const Container = styled.div`
  @media ${mediaQueries.tablet} {
    display: flex;
    justify-content: space-between;
  }
`
const HeaderBox = styled.div`
  margin-bottom: 1rem;

  @media ${mediaQueries.tablet} {
    margin-bottom: 0;
  }
`
const Organizer = styled.div`
  margin-bottom: 2rem;
`
const PlaceBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(100% / 3);
  align-items: flex-start;
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fonts.secondary};

  @media ${mediaQueries.tablet} {
    align-items: flex-end;
    text-align: right;
  }
`
const Label = styled.label`
  padding: 0.6rem 2rem;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.8rem;
`
const Location = styled.div`
  margin: 1rem 2rem 0 0;
`
const ParagraphsWrapper = styled.div`
  margin: 2em 0;
  max-width: 830px;
  line-height: 1.8;
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
const ReadMore = styled.button`
  cursor: pointer;
  border: 0;
  padding-bottom: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyDark};
  background: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.greyDark};
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
`

class Event extends Component {
  state = {
    hasFullDescription: false,
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
        <Info>
          <Container>
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
              {link && (
                <ButtonWithIcon
                  icon={FacebookIcon}
                  text="Куб билеты"
                  gap="1.5rem"
                />
              )}
            </HeaderBox>
            <PlaceBox>
              {displayedDate && <Label>{displayedDate}</Label>}
              {location && <Location>{location}</Location>}
            </PlaceBox>
          </Container>

          {lead && (
            <ParagraphsWrapper
              hasFullDescription={hasFullDescription}
              dangerouslySetInnerHTML={{
                __html: lead.childMarkdownRemark.html,
              }}
            />
          )}

          <ReadMore
            onClick={() =>
              this.setState(({ hasFullDescription }) => ({
                hasFullDescription: !hasFullDescription,
              }))
            }
          >
            {hasFullDescription ? 'Показывай меньше' : 'Показать больше'}
          </ReadMore>
        </Info>
      </BoxWithPhoto>
    )
  }
}

Event.propTypes = {
  event: PropTypes.any,
}

export default Event
