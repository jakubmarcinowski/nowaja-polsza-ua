import React, { Component } from 'react'
import { Link, StaticQuery } from 'gatsby'
import cookie from 'react-cookies'
import styled from 'styled-components'

import Paragraph from './Paragraph'
import Button from './Button'
import closeIcon from '../../static/icon-close.svg'

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
`

const Info = styled(Paragraph)`
  margin-bottom: 2rem;
`

const InfoWrapper = styled.div`
  display: flex;
`

const CloseIcon = styled.img`
  position: relative;
  height: 2rem;
  width: 2rem;
  margin-left: 1rem;
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
    isRodoAccepted: cookie.load('rodo-accepted'),
  }

  acceptCookies = () => {
    this.setState({ isRodoAccepted: true })
    cookie.save('rodo-accepted', true)
  }

  render() {
    const { isRodoAccepted } = this.state

    return isRodoAccepted ? null : (
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
              <u>Polityka prywatności</u>
            </Link>
            .
          </Info>
          <CloseIcon onClick={this.acceptCookies} src={closeIcon} />
        </InfoWrapper>
        <Button onClick={this.acceptCookies}>Я понимаю</Button>
      </Wrapper>
    )
  }
}

export default Rodo
