import React, { Component } from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import cookie from 'react-cookies'
import styled from 'styled-components'

import Paragraph from 'components/Paragraph'
import closeIcon from 'static/icon-close.svg'
import { mediaQueries } from 'utils/mediaQueries'
import { trans } from 'utils/translate'

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  text-align: center;
  background: ${({ theme }) => theme.colors.white};

  @media ${mediaQueries.tablet} {
    padding: 2rem 4rem;
  }

  @media ${mediaQueries.desktop} {
    padding: 2rem 8rem;
  }
`

const Info = styled(Paragraph)`
  margin-bottom: 2rem;
`

const InfoWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
`

const CloseIcon = styled.img`
  position: relative;
  height: 2rem;
  width: 2rem;
  margin-left: 3rem;
  cursor: pointer;
`

const rodoQuery = graphql`
  query RodoQuery {
    allContentfulHomepageStaticContent {
      edges {
        node {
          rodoContent {
            rodoContent
          }
        }
      }
    }
  }
`

class Rodo extends Component {
  state = {
    isRodoVisible: false,
  }

  componentDidMount() {
    if (!cookie.load('rodo-accepted')) {
      this.setState({ isRodoVisible: true })
    }
  }

  acceptCookies = () => {
    this.setState({ isRodoVisible: false })
    cookie.save('rodo-accepted', true)
  }

  render() {
    const { isRodoVisible } = this.state

    return !isRodoVisible ? null : (
      <Wrapper>
        <InfoWrapper>
          <Info size="Medium">
            <StaticQuery
              query={rodoQuery}
              render={({ allContentfulHomepageStaticContent }) => (
                <span>
                  {
                    allContentfulHomepageStaticContent.edges[0].node.rodoContent
                      .rodoContent
                  }
                </span>
              )}
            />{' '}
            <Link to="/privacy-policy">
              <u>{trans('RODO')}</u>
            </Link>
            .
          </Info>
          <CloseIcon
            onClick={this.acceptCookies}
            src={closeIcon}
            alt="close icon"
          />
        </InfoWrapper>
      </Wrapper>
    )
  }
}

export default Rodo
